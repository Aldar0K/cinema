import { Skeleton } from "@/shared/ui";
import { FC, lazy, Suspense } from "react";

const CreateMovieButtonLazy = lazy(() => import("./CreateMovieButton"));

export const CreateMovieButton: FC = (props) => {
  return (
    <Suspense fallback={<Skeleton className="h-[40px] w-[124px]" />}>
      <CreateMovieButtonLazy {...props} />
    </Suspense>
  );
};
