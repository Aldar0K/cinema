import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { defaultPlacesPerRow, defaultRows } from './constants';
import { CreateSeanceDto } from './dto/create-seance.dto';
import { UpdateSeanceDto } from './dto/update-seance.dto';

@Injectable()
export class SeancesService {
  constructor(private prisma: PrismaService) {}

  async create(createSeanceDto: CreateSeanceDto) {
    const seance = await this.prisma.seance.create({ data: createSeanceDto });

    for (let i = 1; i <= defaultRows; i++) {
      for (let j = 1; j <= defaultPlacesPerRow; j++) {
        await this.prisma.seat.create({
          data: {
            row: i,
            place: j,
            seanceId: seance.id,
          },
        });
      }
    }

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
