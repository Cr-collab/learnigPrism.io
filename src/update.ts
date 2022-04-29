import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient();

function main() {
  prisma.courses.update({
    where: {
      id: "81a02562-9f86-4208-b4a4-c0f1fec8d922"
    },
    data: {
      duration: 300
    }
  }).then((result) => console.log(result))
}


main()