import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  constructor(private prisma: PrismaService) {}

  create(createMovieDto: CreateMovieDto) {
    return this.prisma.movie.create({ data: createMovieDto });
  }

  findAll() {
    return this.prisma.movie.findMany();
  }

  findOne(id: number) {
    return this.prisma.movie.findUnique({
      where: { id },
      include: { seats: true },
    });
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
