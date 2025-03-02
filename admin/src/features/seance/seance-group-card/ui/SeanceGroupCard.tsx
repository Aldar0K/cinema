import { FC } from "react";

import type { GroupedSeance } from "@/entities/seance";
import { SeanceCard } from "@/features/seance/seance-card";
import { cn } from "@/shared/utils";

export type SeanceGroupCardProps = {
  groupedSeance: GroupedSeance;
  editable?: boolean;
  deleteable?: boolean;
  className?: string;
};

const SeanceGroupCard: FC<SeanceGroupCardProps> = (props) => {
  const {
    groupedSeance: { date, seances },
    editable = false,
    deleteable = false,
    className,
  } = props;

  return (
    <div className={cn("flex flex-col")}>
      <div className={cn("mb-4", "flex items-center gap-2")}>
        <h2 className="text-2xl font-semibold">{date.toLocaleDateString()}</h2>
      </div>

      <div
        className={cn("grid gap-4 md:grid-cols-2 lg:grid-cols-3", className)}
        data-testid="SeanceList"
      >
        {seances.map((seance) => (
          <SeanceCard
            key={seance.id}
            seance={seance}
            editable={editable}
            deleteable={deleteable}
          />
        ))}
      </div>
    </div>
  );
};

export default SeanceGroupCard;
