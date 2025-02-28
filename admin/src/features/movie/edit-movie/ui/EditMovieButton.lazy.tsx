import { Skeleton } from "@/shared/ui";
import { FC, lazy, Suspense } from "react";
import { EditMovieButtonProps } from "./EditMovieButton";

const EditMovieButtonLazy = lazy(() => import("./EditMovieButton"));

export const EditMovieButton: FC<EditMovieButtonProps> = (props) => {
  return (
    <Suspense fallback={<Skeleton className="h-[40px] w-[124px]" />}>
      <EditMovieButtonLazy {...props} />
    </Suspense>
  );
};
