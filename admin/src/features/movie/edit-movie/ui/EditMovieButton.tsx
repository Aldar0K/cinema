import { Pencil } from "lucide-react";
import { useState, type FC } from "react";

import type { Movie } from "@/entities/movie";
import { Button } from "@/shared/ui";
import { EditMovieDialog } from "./EditMovieDialog";

type EditMovieButtonProps = {
  movie: Movie;
  className?: string;
};

export const EditMovieButton: FC<EditMovieButtonProps> = (props) => {
  const { movie, className } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="secondary"
        size="icon"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
        className={className}
      >
        <Pencil className="h-4 w-4" />
      </Button>

      <EditMovieDialog movie={movie} open={open} setOpen={setOpen} />
    </>
  );
};
