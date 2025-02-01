import { Loader as LoaderComponent } from "lucide-react";
import { FC } from "react";

import { cn } from "@/shared/utils";

export const Loader: FC = () => {
  return (
    <div className={cn("flex justify-center items-center", "bg-background")}>
      <LoaderComponent
        height={32}
        width={32}
        className="animate-spin text-foreground"
      />
    </div>
  );
};
