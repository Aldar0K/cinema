import type { FC } from "react";

import { Seance, useDeleteSeanceMutation } from "@/entities/seance";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui";

type DeleteSeanceDialogProps = {
  seance: Seance;
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const DeleteSeanceDialog: FC<DeleteSeanceDialogProps> = (props) => {
  const {
    seance: { id: seanceId },
    open,
    setOpen,
  } = props;
  const [deleteSeance, { isLoading }] = useDeleteSeanceMutation();

  const handleDelete = async () => {
    try {
      await deleteSeance({ seanceId }).unwrap();
      setOpen(false);
    } catch (error) {
      // Handle error
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Seance</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this seance? This action cannot be
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
