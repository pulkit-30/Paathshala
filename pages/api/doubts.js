import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method == 'POST') {
    const { authorEmail, image, content } = req.body;
    const newDoubt = await prisma.doubt.create({
      data: { authorEmail, image, content },
    });
    if (!newDoubt) {
      res.statusCode = 404;

      res.send(JSON.stringify({ message: 'Unable to create new post' }));

      return;
    }
    res.json(newDoubt);
  }
  if (req.method == 'GET') {
    const doubts = await prisma.doubt.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    if (!doubts) {
      res.statusCode = 404;

      res.send(JSON.stringify({ message: 'Unable to create new post' }));

      return;
    }
    res.json(doubts);
  }
}
