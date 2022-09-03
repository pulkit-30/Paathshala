import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(200)
      .json({ error: "This API call only accepts POST methods" });
  }
  const { email } = req.body;
  const gotUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!gotUser) {
    res.statusCode = 404;

    res.send(JSON.stringify({ message: "Unable to create new post" }));

    return;
  }
  res.json(gotUser);
}
