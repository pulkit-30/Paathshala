import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import main from "./nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(200)
      .json({ error: "This API call only accepts POST methods" });
  }
  const { doubtid, replycontent, phone } = req.body;
  const subbeduser = await prisma.doubt.findUnique({
    where: {
      id: doubtid,
    },
  });
  if (!subbeduser) {
    res.statusCode = 404;

    res.send(JSON.stringify({ message: "Unable to send mail" }));

    return;
  }
  console.log(subbeduser);
  main(
    subbeduser.subscribedByEmail,
    "You got a new reply!",
    `Hi ${subbeduser.name}! You got a new reply, click below to quickly respond!`,
    { mail: [{ doubtid: doubtid }, { reply: replycontent }, { phone: phone }] }
  );

  res.json(subbeduser);
}
