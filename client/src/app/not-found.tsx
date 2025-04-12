import { Film, Home } from "lucide-react";
import Link from "next/link";

import { Button } from "@/shared/ui";

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] text-center px-4 py-16">
      <div className="space-y-6 max-w-md">
        <div className="space-y-2">
          <div className="flex justify-center">
            <Film className="h-24 w-24 text-muted-foreground" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">404</h1>
          <h2 className="text-2xl font-semibold tracking-tight">
            Page Not Found
          </h2>
          <p className="text-muted-foreground">
            Oops! It seems like this scene isn&apos;t in our movie collection.
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/seances">Browse Movies</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
