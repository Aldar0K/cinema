import { FC } from "react";

import { cn } from "@/shared/utils";
import cls from "./MoviePage.module.scss";

const MoviePage: FC = () => {
  return (
    <main className={cn(`main`)} data-testid="MoviePage">
      <div className={cn(cls.container)}>
        <div className={cn(cls.content)}>
          <h1>MoviePage</h1>
        </div>
      </div>
    </main>
  );
};

export default MoviePage;
