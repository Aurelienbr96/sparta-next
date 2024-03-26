import { signOut } from "@/auth";

export const SignOut = () => (
  <form
    action={async () => {
      "use server";
      await signOut();
    }}
  >
    <button className="px-6 py-4 bg-black rounded-lg">
      <p className="text-white">Sign Out</p>
    </button>
  </form>
);
