import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcrypt";

const validateEmail = (email) => {
  const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return regEx.test(email);
};

const validateForm = async (username, email, password, slug) => {
  if (username.length < 3) {
    return { error: "Username must have 3 or more characters" };
  }
  if (!validateEmail(email)) {
    return { error: "Email is invalid" };
  }

  const emailUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  const slugUser = await prisma.user.findUnique({
    where: {
      slug: slug,
    },
  });

  if (slugUser) {
    return { error: "Slug already exists" };
  }

  if (emailUser) {
    return { error: "Email already exists" };
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
  const { username, email, password, role } = req.body;
  const slug = email.split("@")[0];
  const errorMessage = await validateForm(username, email, password, slug);
  if (errorMessage) {
    return res.status(400).json(errorMessage);
  }

  // hash password
  const hashedPassword = await bcrypt.hash(password, 12);

  // create new User on DB

  const newUser = await prisma.user.create({
    data: {
      name: username,
      email,
      password: hashedPassword,
      role: role,
      slug: slug,
    },
  });

  if (newUser) {
    res
      .status(200)
      .json({ msg: "Successfuly created new User: " + newUser.email });
  } else {
    res.status(400).json({ error: "Error on '/api/register': " + err });
  }
}
