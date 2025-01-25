import { FC } from "react";

import { SignInForm } from "@/features";
import { cn } from "@/shared/utils";

const SigninPage: FC = () => {
  return (
    <main
      className={cn(
        "main",
        "min-h-screen p-4",
        "flex items-center justify-center",
      )}
      data-testid="SigninPage"
    >
      <div className="w-full max-w-[350px]">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold">Authorization</h1>
          <p className="text-muted-foreground mt-2">
            Welcome back! Please sign in to continue.
          </p>
        </div>
        <SignInForm />
      </div>
    </main>
  );
};

export default SigninPage;
