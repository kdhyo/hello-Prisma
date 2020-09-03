const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "user 1",
      post: {
        create: [{ title: "post 1" }, { title: "post 2" }],
      },
    },
  });

  await prisma.user.delete({
    where: { id: user.id },
  });

  console.log(user);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
