import { ApiProperty } from '@nestjs/swagger';
import { MovieEntity } from 'src/movies/entities/movie.entity';
import { SeatEntity } from 'src/seats/entities/seat.entity';

export class SeanceEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  time: Date;

  @ApiProperty()
  movie: MovieEntity;

  @ApiProperty()
  movieId: number;

  @ApiProperty()
  seats: SeatEntity[];
}
