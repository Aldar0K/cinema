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
    return this.prisma.seat.findUnique({
      where: { id },
      include: { movie: true },
    });
  }

  update(id: number, updateSeatDto: UpdateSeatDto) {
    return this.prisma.seat.update({
      where: { id },
      data: updateSeatDto,
    });
  }

  remove(id: number) {
    return this.prisma.seat.delete({ where: { id } });
  }
}
