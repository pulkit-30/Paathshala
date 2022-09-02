import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { signIn } from "next-auth/react";

const validateEmail = (email) => {
  const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return regEx.test(email);
};

const validateForm = async (email, password) => {
  if (!validateEmail(email)) {
    return { error: "Email is invalid" };
  }

  const emailUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!emailUser) {
    return { error: "User does not exist" };
  }

  if (password.length < 5) {
    return { error: "Password must have 5 or more characters" };
  }

  return null;
};

export default async function handler(req, res) {
  // validate if it is a POST
  if (req.method !== "POST") {
    return res
      .status(200)
      .json({ error: "This API call only accepts POST methods" });
  }

  // get and validate body variables
  const { email, password } = req.body;
  const errorMessage = await validateForm(email, password);
  if (errorMessage) {
    return res.status(400).json(errorMessage);
  }

  const result = await signIn("credentials", {
    redirect: false,
    email: email,
    password: password,
    callbackUrl: `${process.env.NEXTAUTH_URL}`,
  });
  if (result.error) {
    console.log(res.error);
    res.status(400).json({ msg: "Error " + result.error });
  } else {
    res.redirect("/");
  }
}
