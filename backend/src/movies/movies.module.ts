import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
  imports: [PrismaModule],
})
export class MoviesModule {}
