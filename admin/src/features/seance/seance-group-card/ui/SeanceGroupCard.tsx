import { addHours, format } from "date-fns";
import { ru } from "date-fns/locale";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, ChevronDown } from "lucide-react";
import { FC, useState } from "react";

import { Movie } from "@/entities/movie";
import type { GroupedSeance } from "@/entities/seance";
import { CreateSeanceButton } from "@/features/seance/create-seance";
import { SeanceCard } from "@/features/seance/seance-card";
import { Badge, Button } from "@/shared/ui";
import { cn } from "@/shared/utils";

export type SeanceGroupCardProps = {
  groupedSeance: GroupedSeance;
  editable?: boolean;
  deleteable?: boolean;
  movie?: Movie;
  className?: string;
};

const SeanceGroupCard: FC<SeanceGroupCardProps> = (props) => {
  const {
    groupedSeance: { date, seances },
    editable = false,
    deleteable = false,
    movie,
    className,
  } = props;

  const isPassed = date < new Date();
  const formattedDate = format(date, "d MMMM, EEEE", { locale: ru });
  const capitalizedDate =
    formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  const [isOpen, setIsOpen] = useState(!isPassed);

  return (
    <div className={cn("border rounded-md p-4", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold">{capitalizedDate}</h2>
          {isPassed && (
            <Badge
              variant="outline"
              className={cn("ml-2", "bg-muted text-muted-foreground")}
            >
              Прошедший
            </Badge>
          )}
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="w-9 p-0"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.div>
          <span className="sr-only">
            {isOpen ? "Скрыть сеансы" : "Показать сеансы"}
          </span>
        </Button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.25, delay: 0.05 },
              },
            }}
            exit={{
              opacity: 0,
              height: 0,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.25 },
              },
            }}
            className="overflow-hidden"
          >
            <div className="pt-4">
              <div
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                role="list"
                aria-label={`Сеансы на ${capitalizedDate}`}
              >
                {seances.map((seance) => (
                  <SeanceCard
                    key={seance.id}
                    seance={seance}
                    editable={editable}
                    deleteable={deleteable}
                    className={cn(isPassed && "opacity-70")}
                  />
                ))}
                <CreateSeanceButton
                  initialDate={addHours(
                    new Date(seances[seances.length - 1].time),
                    2,
                  )}
                  movie={movie}
                  size="lg"
                  className="min-h-[181.33px] h-full w-full"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SeanceGroupCard;
