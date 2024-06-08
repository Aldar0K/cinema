import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/auth/auth.guard';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SeatsController } from './seats.controller';
import { SeatsService } from './seats.service';

@Module({
  controllers: [SeatsController],
  providers: [
    SeatsService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  imports: [PrismaModule],
})
export class SeatsModule {}
