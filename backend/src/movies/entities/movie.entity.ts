import { ApiProperty } from '@nestjs/swagger';
import { Movie } from '@prisma/client';
import { SeatEntity } from 'src/seats/entities/seat.entity';

export class MovieEntity implements Movie {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  seats: SeatEntity[];
}
