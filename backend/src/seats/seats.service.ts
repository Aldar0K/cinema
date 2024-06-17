import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
      include: { seance: true, claimedBy: true },
    });
    if (!seat) {
      throw new HttpException('Seat not found', HttpStatus.NOT_FOUND);
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

  async reserve(id: number) {
    return this.prisma.seat.update({
      where: { id },
      data: {
        version: {
          increment: 1,
        },
      },
    });
  }

  async unreserve(id: number) {
    return this.prisma.seat.update({
      where: { id },
      data: {
        userId: null,
        version: {
          decrement: 1,
        },
      },
    });
  }

  async book(id: number, { userId }: BookSeatDto) {
    const seat = await this.prisma.seat.findUnique({
      where: { id },
      select: { userId: true, version: true, id: true },
    });
    if (!seat) {
      throw new HttpException('Seat not found', HttpStatus.NOT_FOUND);
    }

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const isSeatAvailable = seat.userId === null;
    if (!isSeatAvailable) {
      throw new HttpException('Seat already booked', HttpStatus.CONFLICT);
    }

    return this.prisma.seat.update({
      where: {
        id: seat.id,
        version: seat.version,
      },
      data: {
        userId: user.id,
        version: {
          increment: 1,
        },
      },
    });
  }
}
