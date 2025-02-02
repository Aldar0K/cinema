import { FC } from "react";
import { useNavigate } from "react-router-dom";

import type { Movie } from "@/entities/movie";
import { DeleteMovieButton } from "@/features/movie/delete-movie";
import { EditMovieButton } from "@/features/movie/edit-movie";
import { buildMoviePath } from "@/shared/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui";
import { cn } from "@/shared/utils";

export type MovieCardProps = {
  movie: Movie;
  linkable?: boolean;
  editable?: boolean;
  deleteable?: boolean;
};

const MovieCard: FC<MovieCardProps> = (props) => {
  const { movie, linkable = true, editable = true, deleteable = true } = props;
  const navigate = useNavigate();

  const onClick = () => {
    navigate(buildMoviePath(movie.id));
  };

  return (
    <Card
      onClick={linkable && onClick}
      className={cn({
        "cursor-pointer transition-shadow hover:shadow-md": linkable,
      })}
      role={linkable && "link"}
      aria-label={linkable && `View details for ${movie.name}`}
    >
      <CardHeader>
        <CardTitle>{movie.name}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-2">
        {movie.seances && <p>Seances: {movie.seances.length}</p>}

        <div className="flex justify-end gap-2">
          {editable && <EditMovieButton movie={movie} />}
          {deleteable && <DeleteMovieButton movie={movie} />}
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
