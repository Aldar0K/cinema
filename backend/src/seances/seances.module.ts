import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/auth/auth.guard';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SeancesController } from './seances.controller';
import { SeancesService } from './seances.service';

@Module({
  controllers: [SeancesController],
  providers: [
    SeancesService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  imports: [PrismaModule],
})
export class SeancesModule {}
