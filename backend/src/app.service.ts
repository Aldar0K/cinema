import { Injectable, Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class PrismaService extends PrismaClient {}

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
