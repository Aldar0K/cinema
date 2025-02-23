import { type FC, useState } from "react";

import { Seat, SeatCard } from "@/entities/seat";
import { SelectedSeatCard } from "@/features/seat/selected-seat-card";
import { cn } from "@/shared/utils";

export type SeanceSeatsProps = {
  seats: Seat[];
  className?: string;
};

const SeanceSeats: FC<SeanceSeatsProps> = ({ seats, className }) => {
  const [selectedSeat, setSelectedSeat] = useState<Seat | null>(null);

  // Group seats by row
  const seatsByRow = seats.reduce(
    (acc, seat) => {
      if (!acc[seat.row]) {
        acc[seat.row] = [];
      }
      acc[seat.row].push(seat);
      // Sort seats by place number within each row
      acc[seat.row].sort((a, b) => a.place - b.place);
      return acc;
    },
    {} as Record<number, Seat[]>,
  );

  // Get unique, sorted row numbers directly from seats
  const rows = Array.from(new Set(seats.map((seat) => seat.row))).sort(
    (a, b) => a - b,
  );

  const handleSeatClick = (seat: Seat) => {
    setSelectedSeat(selectedSeat?.id === seat.id ? null : seat);
  };

  return (
    <div className="space-y-4">
      <div
        className={cn("space-y-4", className)}
        role="region"
        aria-label="Места в зале"
      >
        {rows.map((row) => (
          <div key={row} className="flex items-center gap-4">
            <div className="text-sm text-muted-foreground">Ряд {row}</div>
            <div className="flex gap-2">
              {seatsByRow[row].map((seat) => (
                <SeatCard
                  key={seat.id}
                  seat={seat}
                  isSelected={selectedSeat?.id === seat.id}
                  onClick={handleSeatClick}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <SelectedSeatCard
        selectedSeat={selectedSeat}
        unselect={() => setSelectedSeat(null)}
      />
    </div>
  );
};

export default SeanceSeats;
