import { FC } from "react";

import { classNames } from "@/shared/utils";

const TemplateName: FC = () => {
  return (
    <main className={classNames(`main`, {}, [])} data-testid="TemplateName">
      <Header />

      <div className="">
        <div className="">
          <h1>TemplateName</h1>
        </div>
      </div>
    </main>
  );
};

export default TemplateName;
