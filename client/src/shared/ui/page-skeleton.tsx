"use client";

import { Loader } from "lucide-react";
import { FC } from "react";

import { cn } from "@/shared/utils";

export const PageSkeleton: FC = () => {
  return (
    <div
      className={cn(
        "absolute inset-0 z-50",
        "flex justify-center items-center",
        "bg-background",
      )}
    >
      <Loader height={32} width={32} className="animate-spin text-foreground" />
    </div>
  );
};
