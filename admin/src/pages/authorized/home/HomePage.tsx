import { FC } from "react";

import { cn } from "@/shared/utils";
import cls from "./HomePage.module.scss";

const HomePage: FC = () => {
  return (
    <main className={cn(`main`, {}, [])} data-testid="HomePage">
      <div className={cn(cls.container)}>
        <div className={cn(cls.content)}>
          <h1>HomePage</h1>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
