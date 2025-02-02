import type { FC } from "react";

import { Movie } from "@/entities/movie";
import { useDeleteMovieMutation } from "@/entities/movie/model/api";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui";

type DeleteMovieDialogProps = {
  movie: Movie;
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const DeleteMovieDialog: FC<DeleteMovieDialogProps> = (props) => {
  const { movie, open, setOpen } = props;
  const [deleteMovie, { isLoading }] = useDeleteMovieMutation();

  const handleDelete = async () => {
    try {
      await deleteMovie({ id: movie.id }).unwrap();
      setOpen(false);
    } catch (error) {
      // Handle error
    }
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
