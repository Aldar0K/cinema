import { FC } from "react";

import { Header } from "@/widgets";
import cls from "./TemplateName.module.scss";
import cn from "@/shared/utils";

const TemplateName: FC = () => {
  return (
    <main className={cn(`main`)} data-testid="TemplateName">
      <Header />

      <div className={cn(cls.container)}>
        <div className={cn(cls.content)}>
          <h1>TemplateName</h1>
        </div>
      </div>
    </main>
  );
};

export default TemplateName;
