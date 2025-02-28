import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createSeatLayout } from 'src/utils';
import { CreateSeanceDto } from './dto/create-seance.dto';
import { UpdateSeanceDto } from './dto/update-seance.dto';

// Generate 5 rows with 10 seats each:
const seats = createSeatLayout(5, 10);

@Injectable()
export class SeancesService {
  constructor(private prisma: PrismaService) {}

  async create(createSeanceDto: CreateSeanceDto) {
    const seance = await this.prisma.seance.create({
      data: {
        ...createSeanceDto,
        seats: {
          create: seats,
        },
      },
    });

    return seance;
  }

  async findAll() {
    return this.prisma.seance.findMany();
  }

  async findOne(id: number) {
    return this.prisma.seance.findUnique({
      where: { id },
      include: { movie: true, seats: true },
    });
  }

  async update(id: number, updateSeanceDto: UpdateSeanceDto) {
    return this.prisma.seance.update({
      where: { id },
      data: updateSeanceDto,
    });
  }

  async remove(id: number) {
    return this.prisma.seance.delete({ where: { id } });
  }
}
