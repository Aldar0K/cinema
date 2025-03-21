import { Pencil } from "lucide-react";
import { useState, type FC } from "react";

import type { UserEntity } from "@/entities/user";
import { Button } from "@/shared/ui";
import { cn } from "@/shared/utils";
import { EditUserDialog } from "./EditUserDialog";

export type EditUserButtonProps = {
  user: UserEntity;
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
};

const EditUserButton: FC<EditUserButtonProps> = (props) => {
  const { user, size = "icon", className } = props;
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

      <EditUserDialog user={user} open={open} setOpen={setOpen} />
    </>
  );
};

export default EditUserButton;
