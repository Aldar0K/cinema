import type { FC } from "react";

import { Seance, SeanceCard } from "@/entities/seance";
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
        <SeanceCard key={seance.id} seance={seance} />
      ))}
    </div>
  );
};

export default SeanceList;
