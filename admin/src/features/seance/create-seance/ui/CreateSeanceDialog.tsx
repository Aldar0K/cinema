import { type FC } from "react";

import type { Movie } from "@/entities/movie";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui";
import { CreateSeanceForm } from "./CreateSeanceForm";

type CreateSeanceDialogProps = {
  movie: Movie;
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const CreateSeanceDialog: FC<CreateSeanceDialogProps> = (props) => {
  const { movie, open, setOpen } = props;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Seance</DialogTitle>
          <DialogDescription>
            Create a new seance for the movie: {movie.name}
          </DialogDescription>
        </DialogHeader>
        <CreateSeanceForm movie={movie} onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};
