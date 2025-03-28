import { FC } from "react";

import { CreateSeanceButton } from "@/features/seance/create-seance";
import { cn } from "@/shared/utils";
import { SeanceListAll } from "@/widgets/seance-list-all";

const SeancesPage: FC = () => {
  return (
    <main className={cn("main")} data-testid="SeancesPage">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Seances</h1>
            <p className="text-muted-foreground">Manage your seances here</p>
          </div>
          <CreateSeanceButton variant="standard" />
        </div>
        <SeanceListAll />
      </div>
    </main>
  );
};

export default SeancesPage;
