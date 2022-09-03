import { PrismaClient } from "@prisma/client";
import axios from "axios";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { doubtid } = req.query;
  if (!doubtid || typeof doubtid !== "string") {
    res.statusCode = 404;
    res.send(JSON.stringify({ message: "Use with a doubtid!" }));
  }
  if (req.method == "POST") {
    const { replybyEmail, content } = req.body;
    const newDoubt = await prisma.reply.create({
      data: { doubtid, replybyEmail, content },
    });
    if (!newDoubt) {
      res.statusCode = 404;

      res.send(JSON.stringify({ message: "Unable to create new comment" }));

      return;
    }
    axios
      .post("http://localhost:3000/api/userbyemail", {
        email: replybyEmail,
      })
      .then(function (response) {
        axios
          .post("http://localhost:3000/api/mailuser", {
            doubtid,
            replycontent: content,
            phone: response.phone,
          })
          .then(function (response) {
            // console.log(response);
          })
          .catch(function (error) {
            // console.log(error);
          });
      })
      .catch(function (error) {
        // console.log(error);
      });

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
