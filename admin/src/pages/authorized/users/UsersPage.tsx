import { FC } from "react";

import { cn } from "@/shared/utils";
import cls from "./UsersPage.module.scss";

const UsersPage: FC = () => {
  return (
    <main className={cn(`main`)} data-testid="UsersPage">
      <div className={cn(cls.container)}>
        <div className={cn(cls.content)}>
          <h1>UsersPage</h1>
        </div>
      </div>
    </main>
  );
};

export default UsersPage;
