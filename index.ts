import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();

  console.log('posts');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
