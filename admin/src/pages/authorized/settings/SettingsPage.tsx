import { FC } from "react";

import { cn } from "@/shared/utils";
import cls from "./SettingsPage.module.scss";

const SettingsPage: FC = () => {
  return (
    <main className={cn(`main`)} data-testid="SettingsPage">
      <div className={cn(cls.container)}>
        <div className={cn(cls.content)}>
          <h1>SettingsPage</h1>
        </div>
      </div>
    </main>
  );
};

export default SettingsPage;
