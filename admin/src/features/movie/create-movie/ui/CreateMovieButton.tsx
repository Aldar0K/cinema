import { Plus } from "lucide-react";
import { type FC, useState } from "react";

import { Button, Dialog } from "@/shared/ui";
import { CreateMovieDialog } from "./CreateMovieDialog";

type CreateMovieButtonProps = {
  className?: string;
};

const CreateMovieButton: FC<CreateMovieButtonProps> = (props) => {
  const { className } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} className={className}>
        <Plus className="mr-2 h-4 w-4" />
        Add Movie
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <CreateMovieDialog open={open} setOpen={setOpen} />
      </Dialog>
    </>
  );
};

export default CreateMovieButton;
