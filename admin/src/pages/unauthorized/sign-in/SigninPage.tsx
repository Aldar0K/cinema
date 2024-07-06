import { FC } from "react";

import { SignInForm } from "@/shared/features";
import { classNames } from "@/shared/utils";

const SigninPage: FC = () => {
  return (
    <main className={classNames(`main`, {}, [])} data-testid="SigninPage">
      <div className="">
        <div className="">
          <h1>SigninPage</h1>
          <SignInForm />
        </div>
      </div>
    </main>
  );
};

export default SigninPage;
