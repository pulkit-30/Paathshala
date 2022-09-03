import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(200)
      .json({ error: "This API call only accepts POST methods" });
  }
  const { doubtid, email } = req.body;
  const addSub = await prisma.user.update({
    where: {
      email,
    },
    data: {
      subscribeddoubts: {
        disconnect: {
          id: doubtid,
        },
      },
    },
  });
  if (!addSub) {
    res.statusCode = 404;

    res.send(JSON.stringify({ message: "Unable to create new post" }));

    return;
  }
  res.json(addSub);
}
