import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import GitHubProvider from "next-auth/providers/github";
import { compare } from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        // Find user with the email
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        // Email Not found
        if (!user) {
          console.log("email not found");
          throw new Error("Email is not registered");
        }

        // Check hashed password with DB hashed password
        const isPasswordCorrect = await compare(
          credentials.password,
          user.password
        );

        // Incorrect password
        if (!isPasswordCorrect) {
          throw new Error("Password is incorrect");
        }

        return user;
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    session({ session, token, user }) {
      if (session.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: "process.env.NEXTAUTH_SECRET",
  },
  secret: process.env.NEXTAUTH_SECRET,
});
