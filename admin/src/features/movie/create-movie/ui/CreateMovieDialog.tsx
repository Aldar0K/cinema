import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui";
import type { FC } from "react";

import { CreateMovieForm } from "./CreateMovieForm";

type CreateMovieDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const CreateMovieDialog: FC<CreateMovieDialogProps> = (props) => {
  const { open, setOpen } = props;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Movie</DialogTitle>
          <DialogDescription>
            Add a new movie to your catalog.
          </DialogDescription>
        </DialogHeader>
        <CreateMovieForm onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};
