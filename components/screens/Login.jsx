import React, { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { Button, TextField } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import Flex from '../ui/Flex';
import Glass from '../ui/Glass';
import style from '../../styles/login.module.css';
import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useContext } from 'react';
import MessageContext from '../../context/messages/MessageContext';
import { useRouter } from 'next/router';

function Login() {
  const Message = useContext(MessageContext);
  const router = useRouter();
  const { data: session } = useSession();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  /**
   *
   * @param {Object} event
   */
  const handelSubmit = async (event) => {
    event.preventDefault();

    const res = await signIn('credentials', {
      redirect: false,
      email: email,
      password: password,
      callbackUrl: `http://localhost:3000`,
    });
    res.error ? Message.ThrowMessage(res.error) : router.push('/');
  };

  return (
    <Flex className='min-h-100vh'>
      {session && <Glass>User Already Logged In !</Glass>}
      {!session && (
        <Glass className={'flex f-space-eve ' + style.FormBox}>
          <form
            className={style.form + ' flex f-column f-space-eve'}
            onSubmit={handelSubmit}
          >
            <h1>Login</h1>
            <TextField
              name='email'
              id='filled-basic'
              label='Email'
              variant='filled'
              className={style.inputField}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              inputProps={{
                style: { color: 'var(--font-color)' },
              }}
              InputLabelProps={{
                style: { color: 'var(--font-color)' },
              }}
            />
            <TextField
              name='password'
              type='password'
              id='filled-basic'
              label='Password'
              variant='filled'
              className={style.inputField}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              inputProps={{
                style: { color: 'var(--font-color)' },
              }}
              InputLabelProps={{
                style: { color: 'var(--font-color)' },
              }}
            />
            <Button variant='contained' type='submit'>
              Login
            </Button>
            <hr className='hr' />
            <Flex className='f-space-eve w-100'>
              <Button
                className={style.btn}
                variant='outlined'
                startIcon={<GoogleIcon />}
                onClick={() =>
                  signIn('google', {
                    callbackUrl: `https://paathshaalademo.vercel.app`,
                  })
                }
              >
                Google
              </Button>
              <Button
                className={style.btn}
                variant='outlined'
                startIcon={<GitHubIcon />}
                onClick={() =>
                  signIn('github', {
                    callbackUrl: `https://paathshaalademo.vercel.app`,
                  })
                }
              >
                Github
              </Button>
            </Flex>
          </form>
          <Image
            src='/login-art.png'
            alt='login-art'
            width={400}
            height={400}
          />
        </Glass>
      )}
    </Flex>
  );
}

export default Login;
