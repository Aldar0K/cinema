import type { FC } from "react";

import { Movie, useDeleteMovieMutation } from "@/entities/movie";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui";
import { notify } from "@/shared/utils";

type DeleteMovieDialogProps = {
  movie: Movie;
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const DeleteMovieDialog: FC<DeleteMovieDialogProps> = (props) => {
  const { movie, open, setOpen } = props;
  const [deleteMovie, { isLoading }] = useDeleteMovieMutation();

  const handleDelete = async () => {
    const response = await deleteMovie({ id: movie.id });

    if ("error" in response) {
      return;
    }

    notify.success("Movie deleted");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Movie</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this movie? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={isLoading}
          >
            {isLoading ? "Deleting..." : "Delete"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
