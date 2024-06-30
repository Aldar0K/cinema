import { FC } from "react";

import { AuthLayout } from "@/layouts";
import { SignInForm } from "@/shared/features";
import { classNames } from "@/shared/utils";

const SigninPage: FC = () => {
  return (
    <AuthLayout>
      <main className={classNames(`main`, {}, [])} data-testid="SigninPage">
        <div className="">
          <div className="">
            <h1>SigninPage</h1>
            <SignInForm />
          </div>
        </div>
      </main>
    </AuthLayout>
  );
};

export default SigninPage;
