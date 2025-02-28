import { Skeleton } from "@/shared/ui";
import { FC, lazy, Suspense } from "react";
import { CreateMovieButtonProps } from "./CreateMovieButton";

const CreateMovieButtonLazy = lazy(() => import("./CreateMovieButton"));

export const CreateMovieButton: FC<CreateMovieButtonProps> = (props) => {
  return (
    <Suspense fallback={<Skeleton className="h-[40px] w-[124px]" />}>
      <CreateMovieButtonLazy {...props} />
    </Suspense>
  );
};
