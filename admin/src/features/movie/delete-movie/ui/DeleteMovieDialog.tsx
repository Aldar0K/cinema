import type { FC } from "react";

import { Movie } from "@/entities/movie";
import { useDeleteMovieMutation } from "@/entities/movie/model/api";
import {
  Button,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui";

type DeleteMovieDialogProps = {
  movie: Movie;
  onSuccess: () => void;
};

export const DeleteMovieDialog: FC<DeleteMovieDialogProps> = (props) => {
  const { movie, onSuccess } = props;
  const [deleteMovie, { isLoading }] = useDeleteMovieMutation();

  const handleDelete = async () => {
    try {
      await deleteMovie({ id: movie.id }).unwrap();
      onSuccess();
    } catch (error) {
      // Handle error
    }
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Delete Movie</DialogTitle>
        <DialogDescription>
          Are you sure you want to delete this movie? This action cannot be
          undone.
        </DialogDescription>
      </DialogHeader>
      <div className="flex justify-end gap-4">
        <Button variant="outline" onClick={onSuccess}>
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
  );
};
