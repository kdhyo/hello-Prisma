const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const post = await prisma.post.create({
    data: {
      title: "donghyo JJang JJang man~~~2",
      author: {
        connect: { id: 1 },
      },
    },
  });
  console.log(post);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
