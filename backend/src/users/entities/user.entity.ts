import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { ArticleEntity } from 'src/articles/entities/article.entity';
import { SeatEntity } from 'src/seats/entities/seat.entity';

export class UserEntity implements User {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty({ required: false, nullable: true })
  articles: ArticleEntity[];

  @ApiProperty({ required: false, nullable: true })
  seats: SeatEntity[];
}
