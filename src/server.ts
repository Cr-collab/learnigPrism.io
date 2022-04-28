import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function create() {
  // usabildade para adição de values na nossas tabelas 
  prisma.courses.create({
    data: {
      duration: 100,
      name: "Curso de Pyton",
      description: "Melhor Curso de Python"
    }
  }).then((data) => console.log(data));
}




