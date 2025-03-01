import { Trash2 } from "lucide-react";
import { type FC, useState } from "react";

import { Seance } from "@/entities/seance";
import { Button } from "@/shared/ui";
import { DeleteSeanceDialog } from "./DeleteSeanceDialog";

type DeleteSeanceButtonProps = {
  seance: Seance;
  className?: string;
};

export const DeleteSeanceButton: FC<DeleteSeanceButtonProps> = (props) => {
  const { seance, className } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="destructive"
        size="icon"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
        className={className}
      >
        <Trash2 className="h-4 w-4" />
      </Button>

      <DeleteSeanceDialog seance={seance} open={open} setOpen={setOpen} />
    </>
  );
};
