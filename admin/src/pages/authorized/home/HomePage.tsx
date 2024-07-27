import { FC } from "react";

import { cn } from "@/shared/utils";
import { Header } from "@/widgets";
import cls from "./HomePage.module.scss";

const HomePage: FC = () => {
  return (
    <main className={cn(`main`, {}, [])} data-testid="HomePage">
      <Header />

      <div className={cn(cls.container)}>
        <div className={cn(cls.content)}>
          <h1>HomePage</h1>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
