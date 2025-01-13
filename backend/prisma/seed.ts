import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';
import { roundsOfHashing } from '../src/auth/constants';

const prisma = new PrismaClient();

async function main() {
  console.log('Clearing existing data...');
  await prisma.seat.deleteMany();
  await prisma.seance.deleteMany();
  await prisma.movie.deleteMany();
  await prisma.user.deleteMany();

  console.log('Seeding admin user...');
  const password = await hash('1234', roundsOfHashing);
  const admin = await prisma.user.create({
    data: {
      email: 'admin@example.com',
      password,
    },
  });

  console.log('Seeding movies and seances...');
  const movie = await prisma.movie.create({
    data: {
      name: 'Furiosa',
      seances: {
        create: [
          {
            time: new Date(),
            seats: {
              create: Array.from({ length: 50 }, (_, index) => ({
                row: Math.floor(index / 10) + 1,
                place: (index % 10) + 1,
              })),
            },
          },
        ],
      },
    },
  });

  const seance = await prisma.seance.findFirst({
    where: { movieId: movie.id },
    include: { movie: true, seats: true },
  });

  console.log({ admin, movie, seance });
}

main()
  .catch((error) => {
    console.error('Error seeding data:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
