import { withAccelerate } from "@prisma/extension-accelerate";
import dotenv from "dotenv";
dotenv.config();

import { PrismaClient } from "@prisma/client";
const db = new PrismaClient().$extends(withAccelerate());
async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: "Famous People" },
        { name: "Movies & TV" },
        { name: "Musicians" },
        { name: "Games" },
        { name: "Animals" },
        { name: "Philosophy" },
        { name: "Scientists" },
      ],
    });
  } catch (error) {
    console.error("Error seeding default categories:", error);
  } finally {
    await db.$disconnect();
  }
}

main();
