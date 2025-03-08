import { useMemo, type FC } from "react";

import { Movie } from "@/entities/movie";
import { groupSeances, Seance } from "@/entities/seance";
import { SeanceGroupCard } from "@/features/seance/seance-group-card";
import { cn } from "@/shared/utils";

export type SeanceListProps = {
  movie: Movie;
  seances: Seance[];
  className?: string;
};

const SeanceList: FC<SeanceListProps> = (props) => {
  const { movie, seances, className } = props;

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
          movie={movie}
          groupedSeance={groupedSeance}
          editable
          deleteable
        />
      ))}
    </div>
  );
};

export default SeanceList;
