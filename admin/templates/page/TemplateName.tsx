import { FC } from "react";

import { classNames } from "@/shared/utils";
import cls from "./TemplateName.module.scss";

const TemplateName: FC = () => {
  return (
    <main
      className={classNames(`main`, {}, [cls.main])}
      data-testid="TemplateName"
    >
      <Header />

      <div className={`container ${cls.container}`}>
        <div className={cls.content}>
          <h1>TemplateName</h1>
        </div>
      </div>
    </main>
  );
};

export default TemplateName;
