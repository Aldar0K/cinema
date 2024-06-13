// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';
import { roundsOfHashing } from '../src/auth/constants';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.article.upsert({
    where: { title: 'Prisma Adds Support for MongoDB' },
    update: {},
    create: {
      title: 'Prisma Adds Support for MongoDB',
      body: 'Support for MongoDB has been one of the most requested features since the initial release of...',
      description:
        "We are excited to share that today's Prisma ORM release adds stable support for MongoDB!",
      published: false,
    },
  });

  const post2 = await prisma.article.upsert({
    where: { title: "What's new in Prisma? (Q1/22)" },
    update: {},
    create: {
      title: "What's new in Prisma? (Q1/22)",
      body: 'Our engineers have been working hard, issuing new releases with many improvements...',
      description:
        'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
      published: true,
    },
  });

  await prisma.user.deleteMany();

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

  const seat1 = await prisma.seat.upsert({
    where: {
      id: 1,
      movieId: movie1.id,
    },
    update: {},
    create: {
      row: 1,
      place: 1,
      movieId: movie1.id,
    },
  });

  const seat2 = await prisma.seat.upsert({
    where: {
      id: 2,
      movieId: movie1.id,
    },
    update: {},
    create: {
      row: 1,
      place: 2,
      movieId: movie1.id,
    },
  });

  console.log({ post1, post2, admin, movie1, seat1, seat2 });
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
