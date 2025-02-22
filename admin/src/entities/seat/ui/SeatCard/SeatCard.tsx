import type { FC } from "react";

import { cn } from "@/shared/utils";
import type { Seat } from "../../model/types";

type SeatCardProps = {
  seat: Seat;
  isSelected: boolean;
  className?: string;
  onClick?: (seat: Seat) => void;
};

const SeatCard: FC<SeatCardProps> = ({
  seat,
  isSelected,
  className,
  onClick,
}) => {
  const isOccupied = !!seat.userId;
  const isReserved = !seat.userId && seat.version;

  return (
    <button
      type="button"
      onClick={() => !isOccupied && onClick?.(seat)}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-md text-sm transition-colors",
        {
          "bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer":
            !isOccupied && !isReserved && !isSelected,
          "bg-muted text-muted-foreground cursor-not-allowed": isOccupied,
          "bg-muted text-accent-foreground cursor-not-allowed": isReserved,
          "bg-secondary text-secondary-foreground ring-2 ring-primary cursor-pointer":
            isSelected,
        },
        className,
      )}
      role="button"
      aria-label={`Место ${seat.place}, ${isOccupied ? "занято" : isReserved ? "зарезервировано" : isSelected ? "выбрано" : "свободно"}`}
      aria-pressed={isSelected}
    >
      {seat.place}
    </button>
  );
};

export default SeatCard;
