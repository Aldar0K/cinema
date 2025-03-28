import { Plus } from "lucide-react";
import { useState, type FC } from "react";

import type { Movie } from "@/entities/movie";
import { Button } from "@/shared/ui";
import { cn } from "@/shared/utils";
import { CreateSeanceDialog } from "./CreateSeanceDialog";

export type CreateSeanceButtonProps = {
  initialDate?: Date;
  movie?: Movie;
  variant?: "standard" | "custom";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
};

const CreateSeanceButton: FC<CreateSeanceButtonProps> = (props) => {
  const {
    initialDate,
    movie,
    variant = "custom",
    size = "icon",
    className,
  } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      {variant === "standard" ? (
        <Button
          type="button"
          onClick={() => setOpen(true)}
          className={className}
        >
          <Plus className="mr-2 h-4 w-4" />
          Create Seance
        </Button>
      ) : (
        <Button
          type="button"
          variant="secondary"
          size={size}
          onClick={() => setOpen(true)}
          className={cn("", className)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      )}

      <CreateSeanceDialog
        initialDate={initialDate}
        movie={movie}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};

export default CreateSeanceButton;
