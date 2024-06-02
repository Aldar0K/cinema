import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { ArticleEntity } from 'src/articles/entities/article.entity';

export class UserEntity implements User {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty({ required: false, nullable: true })
  articles: ArticleEntity[];

  @ApiProperty({ required: false, nullable: true })
  // TODO add SeatEntity when it's created
  seats: any[];
}
