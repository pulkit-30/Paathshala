import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { postid } = req.query;
  if (!postid || typeof postid !== "string") {
    res.statusCode = 404;
    res.send(JSON.stringify({ message: "Use with a postid!" }));
  }
  if (req.method == "POST") {
    const { commentbyEmail } = req.body;
    const newComment = await prisma.comment.create({
      data: { postid, commentbyEmail },
    });
    if (!newComment) {
      res.statusCode = 404;

      res.send(JSON.stringify({ message: "Unable to create new comment" }));

      return;
    }
    res.json(newComment);
  }
  if (req.method == "GET") {
    const comments = await prisma.comment.findMany({
      where: {
        postid,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    if (!comments) {
      res.statusCode = 404;

      res.send(JSON.stringify({ message: "Unable to create new post" }));

      return;
    }
    res.json(comments);
  }
}
