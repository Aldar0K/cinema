import { Seat, useUnreserveSeatMutation } from "@/entities/seat";
import { Button } from "@/shared/ui";
import { notify } from "@/shared/utils";
import type { FC } from "react";

type ResetSeatButtonProps = {
  seat: Seat;
  onSuccess?: () => void;
  className?: string;
};

export const ResetSeatButton: FC<ResetSeatButtonProps> = ({
  seat: { id: seatId },
  onSuccess,
}) => {
  const [unreserveSeat, { isLoading }] = useUnreserveSeatMutation();

  const onUnreserve = async () => {
    const response = await unreserveSeat({ seatId });

    if ("error" in response) {
      return;
    }

    notify.success("Бронь отменена");
    onSuccess?.();
  };

  return (
    <Button
      variant="destructive"
      onClick={onUnreserve}
      disabled={isLoading}
      className="w-full justify-start"
    >
      Отменить бронь
    </Button>
  );
};
