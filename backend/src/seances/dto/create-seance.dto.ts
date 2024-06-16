import { ApiProperty } from '@nestjs/swagger';

export class CreateSeanceDto {
  @ApiProperty()
  time: Date;

  @ApiProperty()
  movieId: number;
}
