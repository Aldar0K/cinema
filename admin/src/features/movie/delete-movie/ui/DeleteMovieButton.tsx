import { Trash2 } from "lucide-react";
import { type FC, useState } from "react";

import { Movie } from "@/entities/movie";
import { Button } from "@/shared/ui";
import { DeleteMovieDialog } from "./DeleteMovieDialog";

type DeleteMovieButtonProps = {
  movie: Movie;
  className?: string;
};

export const DeleteMovieButton: FC<DeleteMovieButtonProps> = (props) => {
  const { movie, className } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="destructive"
        size="icon"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
        className={className}
      >
        <Trash2 className="h-4 w-4" />
      </Button>

      <DeleteMovieDialog movie={movie} open={open} setOpen={setOpen} />
    </>
  );
};
