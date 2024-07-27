import { FC } from "react";

import { classNames } from "@/shared/utils";

const HomePage: FC = () => {
  return (
    <main className={classNames(`main`, {}, [])} data-testid="HomePage">
      {/* <Header /> */}

      <div className="">
        <div className="">
          <h1>HomePage</h1>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
