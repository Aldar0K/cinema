import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/auth/auth.guard';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
  controllers: [MoviesController],
  providers: [
    MoviesService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  imports: [PrismaModule],
})
export class MoviesModule {}
