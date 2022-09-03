import React, { useState, useContext } from "react";
import { signIn, useSession } from "next-auth/react";
import { Button, TextField } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import Flex from "../ui/Flex";
import Glass from "../ui/Glass";
import style from "../../styles/login.module.css";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
} from "@mui/material";
import axios from "axios";

import MessageContext from "../../context/messages/MessageContext";
import { useRouter } from "next/router";

function RegisterBox() {
  const router = useRouter();
  const Message = useContext(MessageContext);
  const { data: session } = useSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = React.useState("student");

  const registerUser = async (event) => {
    event.preventDefault();

    const payload = {
      role,
      username,
      email,
      password,
      phone,
    };

    axios
      .post("/api/register", payload, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        signIn("credentials", {
          email,
          password,
          callbackUrl: `http://localhost:3000/`,
        });
      })
      .catch((err) => Message.ThrowMessage(err.message));
  };

  return (
    <Flex className="min-h-100vh">
      {session && <Glass>User Already Logged In!</Glass>}
      {!session && (
        <Glass className={"flex f-space-eve " + style.FormBox}>
          <form
            className={style.form + " flex f-column f-space-eve"}
            onSubmit={registerUser}
          >
            <h1>Register</h1>
            <FormControl className="flex f-space-btw">
              <FormLabel id="demo-controlled-radio-buttons-group">
                <h3>Role</h3>
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={role}
                onChange={(event) => setRole(event.target.value)}
                className="flex f-row"
              >
                <FormControlLabel
                  value="student"
                  control={<Radio />}
                  label="Student"
                />
                <FormControlLabel
                  value="mentor"
                  control={<Radio />}
                  label="Mentor"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              id="filled-basic"
              label="Name"
              variant="filled"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className={style.inputField}
              inputProps={{
                style: { color: "var(--font-color)" },
              }}
              InputLabelProps={{
                style: { color: "var(--font-color)" },
              }}
            />
            <TextField
              id="filled-basic"
              type="email"
              label="Email"
              variant="filled"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={style.inputField}
              inputProps={{
                style: { color: "var(--font-color)" },
              }}
              InputLabelProps={{
                style: { color: "var(--font-color)" },
              }}
            />
            <TextField
              id="filled-basic"
              type="phone"
              label="Phone"
              variant="filled"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={style.inputField}
              inputProps={{
                style: { color: "var(--font-color)" },
              }}
              InputLabelProps={{
                style: { color: "var(--font-color)" },
              }}
            />
            <TextField
              type="password"
              id="filled-basic"
              label="Password"
              variant="filled"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={style.inputField}
              inputProps={{
                style: { color: "var(--font-color)" },
              }}
              InputLabelProps={{
                style: { color: "var(--font-color)" },
              }}
            />
            <Button type="submit" variant="contained">
              Register
            </Button>
            <hr className="hr" />
            <Flex className="f-space-eve w-100">
              <Button
                className={style.btn}
                variant="outlined"
                startIcon={<GoogleIcon />}
                onClick={() =>
                  signIn("google", {
                    callbackUrl: `https://paathshaalademo.vercel.app`,
                  })
                }
              >
                Google
              </Button>
              <Button
                className={style.btn}
                variant="outlined"
                startIcon={<GitHubIcon />}
                onClick={() =>
                  signIn("github", {
                    callbackUrl: `https://paathshaalademo.vercel.app`,
                  })
                }
              >
                Github
              </Button>
            </Flex>
          </form>
          <Image
            src="/login-art.png"
            alt="login-art"
            width={400}
            height={400}
          />
        </Glass>
      )}
    </Flex>
  );
}

export default RegisterBox;
