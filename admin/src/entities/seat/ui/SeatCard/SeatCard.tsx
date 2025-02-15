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
  const isOccupied = Boolean(seat.userId);

  return (
    <div
      onClick={() => !isOccupied && onClick?.(seat)}
      className={cn(
        "flex h-8 w-8 items-center justify-center rounded-md text-sm transition-colors",
        isOccupied && "bg-muted text-muted-foreground cursor-not-allowed",
        !isOccupied &&
          !isSelected &&
          "bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer",
        isSelected &&
          "bg-secondary text-secondary-foreground ring-2 ring-primary cursor-pointer",
        className,
      )}
      role="button"
      aria-label={`Место ${seat.place}, ${isOccupied ? "занято" : isSelected ? "выбрано" : "свободно"}`}
      aria-pressed={isSelected}
    >
      {seat.place}
    </div>
  );
};

export default SeatCard;
