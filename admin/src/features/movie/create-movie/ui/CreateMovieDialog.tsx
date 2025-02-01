import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui";
import type { FC } from "react";

import { CreateMovieForm } from "./CreateMovieForm";

type CreateMovieDialogProps = {
  onSuccess?: () => void;
};

export const CreateMovieDialog: FC<CreateMovieDialogProps> = (props) => {
  const { onSuccess } = props;

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create Movie</DialogTitle>
        <DialogDescription>Add a new movie to your catalog.</DialogDescription>
      </DialogHeader>
      <CreateMovieForm onSuccess={onSuccess} />
    </DialogContent>
  );
};
