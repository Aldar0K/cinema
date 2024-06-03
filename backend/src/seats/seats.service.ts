import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';

@Injectable()
export class SeatsService {
  constructor(private prisma: PrismaService) {}

  create(createSeatDto: CreateSeatDto) {
    return this.prisma.seat.create({ data: createSeatDto });
  }

  findAll() {
    return this.prisma.seat.findMany();
  }

  findOne(id: number) {
    return this.prisma.seat.findUnique({ where: { id } });
  }

  update(id: number, updateSeatDto: UpdateSeatDto) {
    return `This action updates a #${id} seat`;
  }

  remove(id: number) {
    return `This action removes a #${id} seat`;
  }
}
