import { FC } from "react";

import type { Movie } from "@/entities/movie";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui";

type MovieCardProps = {
  movie: Movie;
  editable?: boolean;
  deleteable?: boolean;
};

export const MovieCard: FC<MovieCardProps> = (props) => {
  const { movie, editable, deleteable } = props;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{movie.name}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-2">
        {movie.seances && <p>Seances: {movie.seances.length}</p>}

        {(editable || deleteable) && (
          <div className="flex justify-end gap-2">
            {/* {editable && <EditMovieButton movie={movie} />} */}
            {/* {deleteable && <DeleteMovieButton movie={movie} />} */}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
