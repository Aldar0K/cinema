import { Pencil } from "lucide-react";
import { useState, type FC } from "react";

import type { Movie } from "@/entities/movie";
import { Button } from "@/shared/ui";
import { cn } from "@/shared/utils";
import { EditMovieDialog } from "./EditMovieDialog";

type EditMovieButtonProps = {
  movie: Movie;
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
};

export const EditMovieButton: FC<EditMovieButtonProps> = (props) => {
  const { movie, size = "icon", className } = props;
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
        <Pencil className="h-4 w-4" />
      </Button>

      <EditMovieDialog movie={movie} open={open} setOpen={setOpen} />
    </>
  );
};
