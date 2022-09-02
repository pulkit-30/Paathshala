import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  // validate if it is a POST
  if (req.method !== "POST") {
    return res
      .status(200)
      .json({ error: "This API call only accepts POST methods" });
  }
  const { email, val } = req.body;

  const updatedpoints = await prisma.user.update({
    where: { email: email },
    data: { points: { decrement: val } },
  });
  if (!updatedpoints) {
    res.statusCode = 404;

    res.send(JSON.stringify({ message: "user not found" }));

    return;
  }
  res.json(updatedpoints.points);
}
