import { requireAuth } from "@/shared/utils";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const user = await requireAuth();

  if (!user) {
    redirect("/auth/login");
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>
      {/* <ProfileForm initialData={user} /> */}
    </div>
  );
}
