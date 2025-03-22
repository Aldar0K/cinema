import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui";
import type { FC } from "react";

import { CreateUserForm } from "./CreateUserForm";

type CreateUserDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const CreateUserDialog: FC<CreateUserDialogProps> = (props) => {
  const { open, setOpen } = props;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create User</DialogTitle>
          <DialogDescription>Add a new user to your catalog.</DialogDescription>
        </DialogHeader>
        <CreateUserForm onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};
