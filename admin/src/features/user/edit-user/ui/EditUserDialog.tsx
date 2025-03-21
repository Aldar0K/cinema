import { type FC } from "react";

import type { UserEntity } from "@/entities/user";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui";
import { EditUserForm } from "./EditUserForm";

type EditUserDialogProps = {
  user: UserEntity;
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const EditUserDialog: FC<EditUserDialogProps> = (props) => {
  const { user, open, setOpen } = props;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
          <DialogDescription>
            Make changes to the user details below.
          </DialogDescription>
        </DialogHeader>
        <EditUserForm user={user} onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};
