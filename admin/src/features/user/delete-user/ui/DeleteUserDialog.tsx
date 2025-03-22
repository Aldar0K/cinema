import type { FC } from "react";

import { UserEntity, useDeleteUserMutation } from "@/entities/user";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui";

type DeleteUserDialogProps = {
  user: UserEntity;
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const DeleteUserDialog: FC<DeleteUserDialogProps> = (props) => {
  const {
    user: { id: userId },
    open,
    setOpen,
  } = props;
  const [deleteUser, { isLoading }] = useDeleteUserMutation();

  const handleDelete = async () => {
    try {
      await deleteUser({ userId }).unwrap();
      setOpen(false);
    } catch (error) {
      // Handle error
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete User</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this user? This action cannot be
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
