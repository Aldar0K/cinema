import { Plus } from "lucide-react";
import { useState, type FC } from "react";

import type { Movie } from "@/entities/movie";
import { Button } from "@/shared/ui";
import { cn } from "@/shared/utils";
import { CreateSeanceDialog } from "./CreateSeanceDialog";

export type CreateSeanceButtonProps = {
  initialDate?: Date;
  movie?: Movie;
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
};

const CreateSeanceButton: FC<CreateSeanceButtonProps> = (props) => {
  const { initialDate, movie, size = "icon", className } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="secondary"
        size={size}
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
        className={cn("flex items-center gap-2", className)}
      >
        <Plus className="h-4 w-4" />
      </Button>

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
