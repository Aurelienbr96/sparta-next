import { signOut } from "@/auth";

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className="p-6 bg-black rounded-lg">
          <p className="text-white">Sign Out</p>
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
