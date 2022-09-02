import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method == "POST") {
    const { status, scheduledAt, studentEmail, mentorEmail } = req.body;
    const newPost = await prisma.interaction.create({
      data: { status, scheduledAt, studentEmail, mentorEmail },
    });
    if (!newPost) {
      res.statusCode = 404;

      res.send(
        JSON.stringify({ message: "Unable to create new interaction!" })
      );

      return;
    }
    res.json(newPost);
  }
  if (req.method == "GET") {
    const { studentEmail, mentorEmail } = req.body;
    if (studentEmail) {
      const interactions = await prisma.interaction.findMany({
        where: {
          studentEmail: studentEmail,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      if (!interactions) {
        res.statusCode = 404;

        res.send(JSON.stringify({ message: "Unable to create new post" }));

        return;
      }
      res.json(interactions);
    }

    if (mentorEmail) {
      const interactions = await prisma.interaction.findMany({
        where: {
          mentorEmail: mentorEmail,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      if (!interactions) {
        res.statusCode = 404;

        res.send(JSON.stringify({ message: "Unable to create new post" }));

        return;
      }
      res.json(interactions);
    }
  }
}
