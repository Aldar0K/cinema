import { Injectable } from '@nestjs/common';
import { CreateSeanceDto } from './dto/create-seance.dto';
import { UpdateSeanceDto } from './dto/update-seance.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SeancesService {
  constructor(private prisma: PrismaService) {}
  
  create(createSeanceDto: CreateSeanceDto) {
    return this.prisma.seance.create({ data: createSeanceDto });
  }

  findAll() {
    return `This action returns all seances`;
  }

  findOne(id: number) {
    return `This action returns a #${id} seance`;
  }

  update(id: number, updateSeanceDto: UpdateSeanceDto) {
    return `This action updates a #${id} seance`;
  }

  remove(id: number) {
    return `This action removes a #${id} seance`;
  }
}
