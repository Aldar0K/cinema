import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ArticlesModule } from './articles/articles.module';
import { UsersModule } from './users/users.module';
import { MoviesModule } from './movies/movies.module';
import { SeatsModule } from './seats/seats.module';

@Module({
  imports: [PrismaModule, ArticlesModule, UsersModule, MoviesModule, SeatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
