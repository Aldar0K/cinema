import { Film } from "lucide-react";
import { type FC } from "react";
import { useParams } from "react-router-dom";

import { useGetMovieQuery } from "@/entities/movie";
import { EditMovieButton } from "@/features/movie/edit-movie";
import { CreateSeanceButton } from "@/features/seance/create-seance";
import { SeanceList } from "@/features/seance/seance-list";
import { Alert, AlertDescription } from "@/shared/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Skeleton } from "@/shared/ui/skeleton";
import { cn } from "@/shared/utils";

const MoviePage: FC = () => {
  const { id } = useParams();
  const { data: movie, isLoading, error } = useGetMovieQuery(id);

  if (isLoading) {
    return (
      <main className="space-y-6">
        <div className="flex items-center gap-6">
          <Skeleton className="h-24 w-24 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
      </main>
    );
  }

  if (error || !movie) {
    return (
      <Alert variant="destructive">
        <AlertDescription>Failed to load movie details</AlertDescription>
      </Alert>
    );
  }

  return (
    <main className={cn("space-y-6")} data-testid="MoviePage">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-6">
          <Avatar className="h-20 w-20">
            <AvatarImage
              // src={movie.posterUrl}
              alt={movie.name}
            />
            <AvatarFallback>
              <Film className="h-10 w-10" />
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{movie.name}</h1>
            <p className="text-muted-foreground">
              {movie.seances.length} seance{movie.seances.length !== 1 && "s"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <EditMovieButton movie={movie} size="default" />
          <CreateSeanceButton movie={movie} size="default" />
        </div>
      </div>
      <SeanceList seances={movie.seances} />
    </main>
  );
};

export default MoviePage;
