import { requireAuth } from "@/shared/utils";
import type { ReactNode } from "react";

export default async function ProfileLayout({
  children,
}: {
  children: ReactNode;
}) {
  // This will redirect to login if not authenticated
  await requireAuth();

  return <>{children}</>;
}
