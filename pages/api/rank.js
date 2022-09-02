import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  // validate if it is a POST
  if (req.method !== "POST") {
    return res
      .status(200)
      .json({ error: "This API call only accepts POST methods" });
  }
  const { role } = req.body;

  const posts = await prisma.user.findMany({
    where: {
      role: `${role}`,
    },
    orderBy: {
      points: "desc",
    },
  });
  if (!posts) {
    res.statusCode = 404;

    res.send(JSON.stringify({ message: "Unable to retrieve" }));

    return;
  }
  res.json(posts);
}
