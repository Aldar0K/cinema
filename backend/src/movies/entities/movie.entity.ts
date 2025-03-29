import { ApiProperty } from '@nestjs/swagger';
import { Movie } from '@prisma/client';
import { SeanceEntity } from 'src/seances/entities/seance.entity';

export class MovieEntity implements Movie {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false, nullable: true })
  posterUrl: string | null;

  @ApiProperty()
  seances: SeanceEntity[];
}
