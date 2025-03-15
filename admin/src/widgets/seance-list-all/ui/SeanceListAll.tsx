import { useMemo, type FC } from "react";

import { groupSeances, useGetSeancesQuery } from "@/entities/seance";
import { SeanceGroupCard } from "@/features/seance/seance-group-card";
import { cn } from "@/shared/utils";
import { SeanceListAllSkeleton } from "./SeanceListAllSkeleton";

export type SeanceListAllProps = {
  className?: string;
};

const SeanceListAll: FC<SeanceListAllProps> = (props) => {
  const { className } = props;
  const { data: seances, isLoading } = useGetSeancesQuery();

  const groupedSeances = useMemo(() => {
    if (!seances) {
      return [];
    }
    return groupSeances(seances);
  }, [seances]);

  if (isLoading) {
    return <SeanceListAllSkeleton />;
  }

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
      data-testid="SeanceListAll"
    >
      {groupedSeances.map((groupedSeance) => (
        <SeanceGroupCard
          key={groupedSeance.date.getTime()}
          groupedSeance={groupedSeance}
          editable
          deleteable
        />
      ))}
    </div>
  );
};

export default SeanceListAll;
