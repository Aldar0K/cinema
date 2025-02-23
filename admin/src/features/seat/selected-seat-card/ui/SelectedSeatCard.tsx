import { Seat } from "@/entities/seat";
import { ReserveSeatButton } from "@/features/seat/reserve-seat";
import { ResetSeatButton } from "@/features/seat/reset-seat";
import {
  Accordion,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/shared/ui";
import { cn } from "@/shared/utils";
import { AnimatePresence, motion } from "framer-motion";
import { MoreVertical } from "lucide-react";
import { FC } from "react";

export type SelectedSeatCardProps = {
  selectedSeat?: Seat;
  unselect?: () => void;
  className?: string;
};

const SelectedSeatCard: FC<SelectedSeatCardProps> = ({
  selectedSeat,
  unselect,
  className,
}) => {
  if (!selectedSeat) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.2 }}
      >
        <Accordion
          type="single"
          defaultValue="selected-seat"
          value="selected-seat"
          collapsible
        >
          <div className={cn("rounded-md border bg-muted/50 p-4", className)}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-sm">
                  <div className="font-medium">Выбранное место</div>
                  <div className="text-muted-foreground">
                    Ряд {selectedSeat.row}, место {selectedSeat.place}
                  </div>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                    <span className="sr-only">
                      Действия с местом {selectedSeat.place}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-[200px] flex flex-col gap-1"
                >
                  {!selectedSeat.version && (
                    <ReserveSeatButton
                      seat={selectedSeat}
                      onSuccess={() => unselect?.()}
                    />
                  )}
                  {!!selectedSeat.version && (
                    <ResetSeatButton
                      seat={selectedSeat}
                      onSuccess={() => unselect?.()}
                    />
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </Accordion>
      </motion.div>
    </AnimatePresence>
  );
};

export default SelectedSeatCard;
