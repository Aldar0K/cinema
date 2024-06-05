import { ApiProperty } from '@nestjs/swagger';

export class BookSeatDto {
  @ApiProperty()
  userId: number;
}
