import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { roundsOfHashing } from 'src/auth/constants';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create({ email, password }: CreateUserDto) {
    const hashedPassword = await hash(password, roundsOfHashing);

    await this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {
    return this.prisma.user.findFirst({
      where: { id },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findFirst({
      where: { email },
      select: { id: true, email: true, password: true },
    });
  }

  async update(id: number, { email, password }: UpdateUserDto) {
    const hashedPassword = await hash(password, roundsOfHashing);

    return this.prisma.user.update({
      where: { id },
      data: {
        email,
        password: hashedPassword,
      },
    });
  }

  async remove(id: number) {
    const user = await this.prisma.user.findFirst({
      where: { id },
    });

    if (!user) {
      throw new HttpException('Seat not found', HttpStatus.NOT_FOUND);
    }

    return this.prisma.user.delete({ where: { id } });
  }
}
