import { Skeleton } from "@/shared/ui";

export default function LoginLoading() {
  return (
    <div className="container mx-auto px-4 py-16 flex justify-center">
      <div className="w-full max-w-md">
        <Skeleton className="h-[500px] w-full rounded-lg" />
      </div>
    </div>
  );
}
