import { PrismaClient } from '@prisma/client';

// This ensures that there is only one instance of PrismaClient in a development environment.
// In production, a new instance is created for each server instance.
const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;