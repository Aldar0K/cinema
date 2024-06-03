import { ApiProperty } from '@nestjs/swagger';

export class CreateSeatDto {
  @ApiProperty()
  row: number;

  @ApiProperty()
  place: number;

  @ApiProperty()
  movieId: number;
}
