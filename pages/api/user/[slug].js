import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const user = async (req, res) => {
  console.log(req.body);
  const { slug } = req.query;
  if (!slug || typeof slug !== "string") {
    res.statusCode = 404;
    res.send(JSON.stringify({ message: "Use with a slug!" }));
  }

  const data = await prisma.user.findFirst({
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  if (!data) {
    res.statusCode = 404;

    res.send(JSON.stringify({ message: "slug not found" }));

    return;
  }

  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=1000000000, stale-while-revalidate");

  return res.json(data);
};
export default user;
