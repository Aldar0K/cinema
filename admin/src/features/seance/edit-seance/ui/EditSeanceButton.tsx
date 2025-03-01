import { Pencil } from "lucide-react";
import { useState, type FC } from "react";

import type { Seance } from "@/entities/seance";
import { Button } from "@/shared/ui";
import { cn } from "@/shared/utils";
import { EditSeanceDialog } from "./EditSeanceDialog";

export type EditSeanceButtonProps = {
  seance: Seance;
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
};

const EditSeanceButton: FC<EditSeanceButtonProps> = (props) => {
  const { seance, size = "icon", className } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="secondary"
        size={size}
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
        className={cn("flex items-center gap-2", className)}
      >
        <Pencil className="h-4 w-4" />
      </Button>

      <EditSeanceDialog seance={seance} open={open} setOpen={setOpen} />
    </>
  );
};

export default EditSeanceButton;
