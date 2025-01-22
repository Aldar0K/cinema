import { FC } from "react";

import { cn } from "@/shared/utils";
import cls from "./SeancesPage.module.scss";

const SeancesPage: FC = () => {
  return (
    <main className={cn(`main`)} data-testid="SeancesPage">
      <div className={cn(cls.container)}>
        <div className={cn(cls.content)}>
          <h1>SeancesPage</h1>
        </div>
      </div>
    </main>
  );
};

export default SeancesPage;
