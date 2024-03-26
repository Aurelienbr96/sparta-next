import { PrismaClient } from "@prisma/client";

class UserService {
  constructor(public prisma: PrismaClient) {}

  async getUser(email: string) {
    try {
      const user = await this.prisma.user.findUnique({ where: { email } });
      return user;
    } catch (error) {
      throw new Error("Failed to fetch user.");
    }
  }
}

const instanceUserService = new UserService(new PrismaClient());

export default instanceUserService;
