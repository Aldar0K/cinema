import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SeatsController } from './seats.controller';
import { SeatsService } from './seats.service';

@Module({
  controllers: [SeatsController],
  providers: [SeatsService],
  imports: [PrismaModule],
})
export class SeatsModule {}
