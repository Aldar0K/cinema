import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Calendar } from "lucide-react";
import { FC, useState } from "react";

import type { Seance } from "@/entities/seance";
import { SeanceModal } from "@/features/seance/seance-modal";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui";
import { cn } from "@/shared/utils";

export type SeanceCardProps = {
  seance: Seance;
  editable?: boolean;
  deleteable?: boolean;
};

const SeanceCard: FC<SeanceCardProps> = (props) => {
  const { seance } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const date = new Date(seance.time);
  const formattedDate = format(date, "dd.MM.yyyy", { locale: ru });
  const formattedTime = format(date, "HH:mm");
  const machineReadableDate = format(date, "yyyy-MM-dd'T'HH:mm:ss");

  return (
    <>
      <Card
        onClick={() => setIsModalOpen(true)}
        className={cn("cursor-pointer transition-shadow hover:shadow-md")}
        role="listitem"
        aria-label={`Сеанс фильма ${seance.movie.name} ${formattedDate} в ${formattedTime}`}
      >
        <CardHeader>
          <CardTitle>{seance.movie.name}</CardTitle>
        </CardHeader>

        <CardContent className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <time dateTime={machineReadableDate}>
              {formattedDate}, {formattedTime}
            </time>
          </div>

          <div className="flex justify-end gap-2">
            {/* {editable && <EditSeanceButton seance={seance} />} */}
            {/* {deleteable && <DeleteSeanceButton seance={seance} />} */}
          </div>
        </CardContent>
      </Card>

      <SeanceModal
        seance={seance}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </>
  );
};

export default SeanceCard;
