import { FC } from "react";

import { cn } from "@/shared/utils";
import cls from "./FinancePage.module.scss";

const FinancePage: FC = () => {
  return (
    <main className={cn(`main`)} data-testid="FinancePage">
      <div className={cn(cls.container)}>
        <div className={cn(cls.content)}>
          <h1>FinancePage</h1>
        </div>
      </div>
    </main>
  );
};

export default FinancePage;
