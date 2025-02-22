import { Seat } from "@/entities/seat";
import { Button } from "@/shared/ui";
import type { FC } from "react";

type ResetSeatButtonProps = {
  seat: Seat;
  onSuccess?: () => void;
  className?: string;
};

export const ResetSeatButton: FC<ResetSeatButtonProps> = ({ onSuccess }) => {
  const onCancel = async () => {
    try {
      // TODO: Add API call
      onSuccess?.();
    } catch (error) {
      // Handle error
    }
  };

  return (
    <Button
      variant="destructive"
      onClick={onCancel}
      className="w-full justify-start"
    >
      Отменить бронь
    </Button>
  );
};
