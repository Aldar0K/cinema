import { ApiProperty } from '@nestjs/swagger';
import { Movie } from '@prisma/client';

export class MovieEntity implements Movie {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  // TODO add SeatEntity
  seats: any[];
}
