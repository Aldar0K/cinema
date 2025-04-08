import { FC } from "react";

import { cn } from "@/shared/utils";
import cls from "./TemplateName.module.scss";

const TemplateName: FC = () => {
  return (
    <main className={cn(`main`)} data-testid="TemplateName">
      <div className={cn(cls.container)}>
        <div className={cn(cls.content)}>
          <h1>TemplateName</h1>
        </div>
      </div>
    </main>
  );
};

export default TemplateName;
