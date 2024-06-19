// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';
import { roundsOfHashing } from '../src/auth/constants';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  await prisma.seance.deleteMany();
  await prisma.seat.deleteMany();

  const password = await hash('1234', roundsOfHashing);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      password,
    },
  });

  const movie1 = await prisma.movie.upsert({
    where: { name: 'Furiosa' },
    update: {},
    create: {
      name: 'Furiosa',
    },
  });

  const seance1 = await prisma.seance.upsert({
    where: { id: 1 },
    update: {},
    create: {
      time: new Date(),
      movieId: movie1.id,
    },
  });

  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 10; j++) {
      await prisma.seat.create({
        data: {
          row: i,
          place: j,
          seanceId: seance1.id,
        },
      });
    }
  }

  const seance11 = await prisma.seance.findFirst({
    where: { id: seance1.id },
    include: { movie: true, seats: true },
  });

  console.log({ admin, movie1, seance1, seance11 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
