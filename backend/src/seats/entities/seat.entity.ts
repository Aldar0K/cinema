import { ApiProperty } from '@nestjs/swagger';
import { Seat } from '@prisma/client';
import { SeanceEntity } from 'src/seances/entities/seance.entity';
import { UserEntity } from 'src/users/entities/user.entity';

export class SeatEntity implements Seat {
  @ApiProperty()
  id: number;

  @ApiProperty()
  row: number;

  @ApiProperty()
  place: number;

  @ApiProperty()
  seance: SeanceEntity;

  @ApiProperty()
  seanceId: number;

  @ApiProperty({ required: false, nullable: true })
  userId: number | null;

  @ApiProperty({ required: false, nullable: true })
  claimedBy: UserEntity | null;

  @ApiProperty()
  version: number;
}
