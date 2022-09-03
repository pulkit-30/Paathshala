import { PrismaClient } from "@prisma/client";
import axios from "axios";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { doubtid } = req.query;
  if (!doubtid || typeof doubtid !== "string") {
    res.statusCode = 404;
    res.send(JSON.stringify({ message: "Use with a doubtid!" }));
  }

  if (req.method !== "POST") {
    return res
      .status(200)
      .json({ error: "This API call only accepts POST methods" });
  }
  const gotDoubt = await prisma.doubt.findUnique({
    where: {
      id: doubtid,
    },
  });
  if (!gotDoubt) {
    res.statusCode = 404;

    res.send(JSON.stringify({ message: "Unable to create new comment" }));

    return;
  }

  res.json(gotDoubt);
}
