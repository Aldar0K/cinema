import { ApiProperty } from '@nestjs/swagger';
import { Seat } from '@prisma/client';
import { MovieEntity } from 'src/movies/entities/movie.entity';
import { UserEntity } from 'src/users/entities/user.entity';

export class SeatEntity implements Seat {
  @ApiProperty()
  id: number;

  @ApiProperty()
  row: number;

  @ApiProperty()
  place: number;

  @ApiProperty({ required: false, nullable: true })
  userId: number | null;

  @ApiProperty({ required: false, nullable: true })
  claimedBy: UserEntity | null;

  @ApiProperty()
  movieId: number;

  @ApiProperty()
  movie: MovieEntity;

  @ApiProperty()
  version: number;
}
