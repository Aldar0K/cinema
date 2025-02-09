import type { Seance } from "@/entities/seance";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Calendar, Clock } from "lucide-react";
import type { FC } from "react";

export type SeanceModalProps = {
  seance: Seance;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const SeanceModal: FC<SeanceModalProps> = ({ seance, open, onOpenChange }) => {
  const date = new Date(seance.time);
  const formattedDate = format(date, "dd.MM.yyyy", { locale: ru });
  const formattedTime = format(date, "HH:mm");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{seance.movie.name}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center gap-4">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-4">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{formattedTime}</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SeanceModal;
