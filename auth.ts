import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import bcrypt from "bcrypt";
import instanceUserService, { getUser } from "./app/services/user.service";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      // @ts-ignore overlap type User Next Auth / Prisma
      async authorize(credentials) {
        try {
          const parsedCredentials = z
            .object({ email: z.string().email(), password: z.string().min(6) })
            .safeParse(credentials);

          if (parsedCredentials.success) {
            const { email, password } = parsedCredentials.data;
            const user = await instanceUserService.getUser(email);

            if (!user) throw "Email not found";

            const passwordsMatch = await bcrypt.compare(password, user.password);

            if (passwordsMatch) return user;
          }

          return null;
        } catch (e) {
          console.log(e);
        }
      },
    }),
  ],
});
