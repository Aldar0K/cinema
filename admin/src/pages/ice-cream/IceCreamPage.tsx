import { FC } from "react";

import { classNames } from "@/shared/utils";

const IceCreamPage: FC = () => {
  return (
    <main className={classNames(`main`, {}, [])} data-testid="IceCreamPage">
      <div className="">
        <div className="">
          <h1>IceCreamPage</h1>
        </div>
      </div>
    </main>
  );
};

export default IceCreamPage;
