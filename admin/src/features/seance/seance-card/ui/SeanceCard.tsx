import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Clock } from "lucide-react";
import { FC, useState } from "react";

import type { Seance } from "@/entities/seance";
import { DeleteSeanceButton } from "@/features/seance/delete-seance";
import { EditSeanceButton } from "@/features/seance/edit-seance";
import { SeanceModal } from "@/features/seance/seance-modal";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui";
import { cn } from "@/shared/utils";

export type SeanceCardProps = {
  seance: Seance;
  editable?: boolean;
  deleteable?: boolean;
  className?: string;
};

const SeanceCard: FC<SeanceCardProps> = (props) => {
  const { seance, editable = false, deleteable = false, className } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const date = new Date(seance.time);
  const formattedDate = format(date, "dd.MM.yyyy", { locale: ru });
  const formattedTime = format(date, "HH:mm");
  const machineReadableDate = format(date, "yyyy-MM-dd'T'HH:mm:ss");

  return (
    <>
      <Card
        onClick={() => setIsModalOpen(true)}
        className={cn(
          "cursor-pointer transition-shadow hover:shadow-md",
          className,
        )}
        role="button"
        aria-label={`Сеанс фильма ${seance.movie.name} ${formattedDate} в ${formattedTime}`}
      >
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <time
              dateTime={machineReadableDate}
              className="text-xl font-semibold"
            >
              {formattedTime}
            </time>
          </div>
        </CardHeader>

        <CardContent className="space-y-1.5">
          <CardTitle className="text-base font-medium">
            {seance.movie.name}
          </CardTitle>
          <div className="text-sm text-muted-foreground">{formattedDate}</div>

          <div className="flex justify-end gap-2">
            {editable && <EditSeanceButton seance={seance} />}
            {deleteable && <DeleteSeanceButton seance={seance} />}
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
