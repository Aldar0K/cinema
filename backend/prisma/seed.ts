import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';
import { roundsOfHashing } from '../src/auth/constants';
import { createSeatLayout } from '../src/utils';

const prisma = new PrismaClient();

// Generate 5 rows with 10 seats each:
const seats = createSeatLayout(5, 10);

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
              create: seats,
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
