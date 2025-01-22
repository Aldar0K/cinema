import { FC } from "react";

import { cn } from "@/shared/utils";
import cls from "./SeatsPage.module.scss";

const SeatsPage: FC = () => {
  return (
    <main className={cn(`main`)} data-testid="SeatsPage">
      <div className={cn(cls.container)}>
        <div className={cn(cls.content)}>
          <h1>SeatsPage</h1>
        </div>
      </div>
    </main>
  );
};

export default SeatsPage;
