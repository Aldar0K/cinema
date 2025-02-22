import { Seat, useReserveSeatMutation } from "@/entities/seat";
import { Button } from "@/shared/ui";
import { notify } from "@/shared/utils";
import type { FC } from "react";

type ReserveSeatButtonProps = {
  seat: Seat;
  onSuccess?: () => void;
  className?: string;
};

export const ReserveSeatButton: FC<ReserveSeatButtonProps> = ({
  seat: { id: seatId },
  onSuccess,
}) => {
  const [reserveSeat, { isLoading }] = useReserveSeatMutation();

  const onReserve = async () => {
    const response = await reserveSeat({ seatId });

    if ("error" in response) {
      return;
    }

    notify.success("Место забронировано");
    onSuccess?.();
  };

  return (
    <Button
      variant="default"
      onClick={onReserve}
      disabled={isLoading}
      className="w-full justify-start"
    >
      Забронировать место
    </Button>
  );
};
