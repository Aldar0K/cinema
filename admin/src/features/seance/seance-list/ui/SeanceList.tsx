import { useMemo, type FC } from "react";

import { groupSeances, Seance } from "@/entities/seance";
import { SeanceGroupCard } from "@/features/seance/seance-group-card";
import { cn } from "@/shared/utils";

export type SeanceListProps = {
  seances: Seance[];
  className?: string;
};

const SeanceList: FC<SeanceListProps> = (props) => {
  const { seances, className } = props;

  const groupedSeances = useMemo(() => {
    return groupSeances(seances);
  }, [seances]);

  if (!seances.length) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Нет доступных сеансов</p>
      </div>
    );
  }

  return (
    <div
      className={cn("flex flex-col gap-8", className)}
      data-testid="SeanceList"
    >
      {groupedSeances.map((groupedSeance) => (
        <SeanceGroupCard
          key={groupedSeance.date.getTime()}
          groupedSeance={groupedSeance}
          editable
          deleteable
          movie={groupedSeance.seances[0].movie}
        />
      ))}
    </div>
  );
};

export default SeanceList;
