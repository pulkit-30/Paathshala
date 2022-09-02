import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const points = async (req, res) => {
  const { slug } = req.query;
  if (!slug || typeof slug !== "string") {
    res.statusCode = 404;
    res.send(JSON.stringify({ message: "Use with a slug!" }));
  }

  const data = await prisma.user.findFirst({
    where: {
      id: {
        equals: slug,
      },
    },
  });

  if (!data) {
    res.statusCode = 404;

    res.send(JSON.stringify({ message: "id not found" }));

    return;
  }

  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");

  return res.json(data.points);
};
export default points;
