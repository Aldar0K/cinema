import type { FC } from "react";

import { Seance } from "@/entities/seance";
import { SeanceCard } from "@/features/seance/seance-card";
import { cn } from "@/shared/utils";

export type SeanceListProps = {
  seances?: Seance[];
  className?: string;
};

const SeanceList: FC<SeanceListProps> = (props) => {
  const { seances, className } = props;

  return (
    <div
      className={cn("grid gap-4 md:grid-cols-2 lg:grid-cols-3", className)}
      data-testid="SeanceList"
    >
      {seances.map((seance) => (
        <SeanceCard key={seance.id} seance={seance} editable deleteable />
      ))}
    </div>
  );
};

export default SeanceList;
