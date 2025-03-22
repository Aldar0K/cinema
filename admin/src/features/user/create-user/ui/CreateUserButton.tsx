import { Plus } from "lucide-react";
import { type FC, useState } from "react";

import { Button, Dialog } from "@/shared/ui";
import { CreateUserDialog } from "./CreateUserDialog";

export type CreateUserButtonProps = {
  className?: string;
};

const CreateUserButton: FC<CreateUserButtonProps> = (props) => {
  const { className } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} className={className}>
        <Plus className="mr-2 h-4 w-4" />
        Add User
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <CreateUserDialog open={open} setOpen={setOpen} />
      </Dialog>
    </>
  );
};

export default CreateUserButton;
