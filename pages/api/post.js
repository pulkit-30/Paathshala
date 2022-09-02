import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method == "POST") {
    const { authorEmail, image, content } = req.body;
    const newPost = await prisma.post.create({
      data: { authorEmail, image, content },
    });
    if (!newPost) {
      res.statusCode = 404;

      res.send(JSON.stringify({ message: "Unable to create new post" }));

      return;
    }
    res.json(newPost);
  }
  if (req.method == "GET") {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    if (!posts) {
      res.statusCode = 404;

      res.send(JSON.stringify({ message: "Unable to create new post" }));

      return;
    }
    res.json(posts);
  }
}
