import { Trash2 } from "lucide-react";
import { type FC, useState } from "react";

import { UserEntity } from "@/entities/user";
import { Button } from "@/shared/ui";
import { DeleteUserDialog } from "./DeleteUserDialog";

type DeleteUserButtonProps = {
  user: UserEntity;
  className?: string;
};

export const DeleteUserButton: FC<DeleteUserButtonProps> = (props) => {
  const { user, className } = props;
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

      <DeleteUserDialog user={user} open={open} setOpen={setOpen} />
    </>
  );
};
