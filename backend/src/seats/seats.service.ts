import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BookSeatDto } from './dto/book-seat.dto';
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

  async findOne(id: number) {
    const seat = await this.prisma.seat.findUnique({
      where: { id },
      include: { movie: true, claimedBy: true },
    });
    if (!seat) {
      throw new Error('Seat not found');
    }

    return seat;
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

  async book(id: number, { userId }: BookSeatDto) {
    const seat = await this.prisma.seat.findUnique({
      where: { id },
      select: { userId: true, version: true, id: true },
    });
    if (!seat) {
      throw new Error('Seat not found');
    }

    const isSeatAvailable = seat.userId === null;
    if (!isSeatAvailable) {
      throw new Error('Seat already booked');
    }

    return this.prisma.seat.updateMany({
      where: {
        id: seat.id,
        version: seat.version,
      },
      data: {
        userId,
        version: { increment: 1 },
      },
    });
  }
}
