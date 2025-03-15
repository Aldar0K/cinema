import { FC } from "react";

import { cn } from "@/shared/utils";
import { SeanceListAll } from "@/widgets/seance-list-all";

const SeancesPage: FC = () => {
  return (
    <main className={cn("space-y-6")} data-testid="SeancesPage">
      <SeanceListAll />
    </main>
  );
};

export default SeancesPage;
