import { type FC } from "react";

import type { Seance } from "@/entities/seance";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui";
import { EditSeanceForm } from "./EditSeanceForm";

type EditSeanceDialogProps = {
  seance: Seance;
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const EditSeanceDialog: FC<EditSeanceDialogProps> = (props) => {
  const { seance, open, setOpen } = props;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Seance</DialogTitle>
          <DialogDescription>
            Make changes to the seance details below.
          </DialogDescription>
        </DialogHeader>
        <EditSeanceForm seance={seance} onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};
