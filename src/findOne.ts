import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function main() {
  // SELECT * FROM COURSES LIMIT 1
  // SELECT * FROM COURSES ORDER BY ID DESC LIMIT 1
  // prisma.courses.findFirst().then(course => console.log(course, 'pegando o primeiro dado criado'));
  prisma.courses.findFirst({ take: 1 }).then(course => console.log(course, 'pegando o primeiro dado que seja o mais atual'))

}


main();