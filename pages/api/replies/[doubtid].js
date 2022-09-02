import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { doubtid } = req.query;
  if (!doubtid || typeof doubtid !== "string") {
    res.statusCode = 404;
    res.send(JSON.stringify({ message: "Use with a doubtid!" }));
  }
  if (req.method == "POST") {
    const { replybyEmail } = req.body;
    const newDoubt = await prisma.comment.create({
      data: { doubtid, replybyEmail },
    });
    if (!newDoubt) {
      res.statusCode = 404;

      res.send(JSON.stringify({ message: "Unable to create new comment" }));

      return;
    }
    res.json(newDoubt);
  }
  if (req.method == "GET") {
    const replies = await prisma.comment.findMany({
      where: {
        doubtid,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    if (!replies) {
      res.statusCode = 404;

      res.send(JSON.stringify({ message: "Unable to create new post" }));

      return;
    }
    res.json(replies);
  }
}
