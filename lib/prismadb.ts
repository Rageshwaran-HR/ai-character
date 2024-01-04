import { PrismaClient } from "@prisma/client";
import { withAccelerate } from '@prisma/extension-accelerate';

declare global {
  var prisma: PrismaClient | undefined;
}

const dynamicExtension = new PrismaClient().$extends(withAccelerate());

const unknownPrismaClient: unknown = dynamicExtension;

const prismadb = globalThis.prisma || (unknownPrismaClient as PrismaClient);

if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb;
