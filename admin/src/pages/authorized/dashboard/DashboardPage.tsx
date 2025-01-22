import { FC } from "react";

import { cn } from "@/shared/utils";
import cls from "./DashboardPage.module.scss";

const DashboardPage: FC = () => {
  return (
    <main className={cn(`main`)} data-testid="DashboardPage">
      <div className={cn(cls.container)}>
        <div className={cn(cls.content)}>
          <h1>DashboardPage</h1>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
