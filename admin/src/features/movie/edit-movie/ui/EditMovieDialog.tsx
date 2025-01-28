import { type FC } from "react";

import type { Movie } from "@/entities/movie";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui";
import { EditMovieForm } from "./EditMovieForm";

type EditMovieDialogProps = {
  movie: Movie;
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const EditMovieDialog: FC<EditMovieDialogProps> = (props) => {
  const { movie, open, setOpen } = props;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Movie</DialogTitle>
          <DialogDescription>
            Make changes to the movie details below.
          </DialogDescription>
        </DialogHeader>
        <EditMovieForm movie={movie} onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};
