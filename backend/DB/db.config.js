import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: ["query"],// ["query", "info", "warn", "error"],
});

export default prisma;