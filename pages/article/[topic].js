import React from 'react';
import ReactMarkdown from '../../components/utils/ReactMarkdown';
import style from '../../styles/article.module.css';
import Navbar from '../../components/header/Navbar';
import RecentActivity from '../../components/sidebar/RecentActivity';
import { useRouter } from 'next/router';

const topicSection = () => {
  const router = useRouter();
  const { topic } = router.query;
  let markdown = ``;
  if (topic === 'article-mustafa') {
    markdown = `
Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management. Web development is closely related to the job of designing the features and functionality of apps. The term development is usually reserved for the actual construction of these things. The basic tools involved are programming languages called HTML, CSS, and JavaScript.

## Frontend-Development

The front-end is establishing the connection b/w the client and web browser. In simple words, it is what the user sees on a web page. It involves the “client-facing” side of web development. That is to say that it generally refers to the portion of the site, app, or digital product that users will see and interact with. A Front-End Developer, therefore, is responsible for the way a digital product looks and “feels,” which is why they are often also referred to as Web Designers. Front-End Developers will usually need to possess a solid understanding of programming languages, including HTML, CSS, and JavaScript, as well as frameworks like React, Bootstrap, Backbone, AngularJS, and EmberJS.


## Backend-Development

If Front-End Developers are responsible for how a digital product looks, Back-End Developers are focused on how it works. This means they’re responsible for overseeing what’s under the hood, including database interactions, user authentication, server, network and hosting configuration, and business logic. The primary responsibility of Back-End Developers is to ensure the functionality of the site, including its responsiveness and speed. To do that, Back-End Developers have to know how to build servers with modern frameworks (while developing custom APIs and serving static websites and files), and how to manage databases and data on a web server. Typically, they use server-side languages, including PHP, Ruby, and Python, as well as tools including MySQL, Oracle, and Git.


That's it you will be a full-stack developer 🚀

![](https://i.pinimg.com/originals/78/b5/38/78b5382c0e615ae2f56ba083a61f0506.gif)



## Thank You
    `;
  } else if (topic === 'article-pulkit') {
    markdown = `
    

## Who am I?

**A little background about me!**

My name is Pulkit Gupta. I am a 2nd-year student of ABES Engineering College(AKTU), pursuing B.Tech in Computer Science and Engineering.

**Development  Background**

C++ was my first programming language while I was in 11th grade, I have also won some programming certificates in C++. I began learning front-end development in my first year of college, and this is where my adventure with open source began. I have previously worked on a few modest open source projects. I've also dabbled with Nodejs backend coding and created some web apps. 
I have a fair bit of familiarity with standard data structures and algorithms, in C and C++ (for the purpose of competitive programming and learning). 
I can write, explain and even teach to code in a variety of languages, including Javascript, Typescript, Python, and C++.


## What is Open Source?

The term open source refers to something people can modify and share because its design is publicly accessible.

**Open-Source Softwares**
Open source software is software with source code that anyone can inspect, modify, and enhance.

"Source code" is the part of software that most computer users don't ever see; it's the code computer programmers can manipulate to change how a piece of software—a "program" or "application"—works. Programmers who have access to a computer program's source code can improve that program by adding features to it or fixing parts that don't always work correctly.


## My Journey

![](https://c.tenor.com/7RN-mwk4LfIAAAAM/kids-funny.gif)
**How I started**

On September 4, 2021, in my memory, one of my seniors contacted to appreciate me for my growth and learning and to introduce me to open source software.

After that, I took part in Hactoberfest 2021, gained a lot of knowledge about version control (git and gitHub), and started  fixing issues and contributing to the CircuitVerse Organization.

My first PR
[feat: Added redo option to simulator](https://github.com/CircuitVerse/CircuitVerse/pull/2654)



**Challenges faced**

like everyone, for me it was challenging to get started, but 


## What I am currently doing/learning?

Recently, I have been selected as [Google Summer of Code 2022 student](https://summerofcode.withgoogle.com/programs/2022/projects/E4C2Qp3R) with CircuitVerse organization, and currently, working on my project, engaging in community learning, and filling out my development abilities with CircuitVerse.


## Final Note


<center>

<img src="https://i.gifer.com/6eZ.gif" />

</center>


So that's my journey, Hope it will help you to start yours and next article i will read about your journey 🚀
    `;
  }
  return (
    <div className='flex f-start'>
      <section className={style.article_main_section}>
        <Navbar>
          <h3>Article Topic</h3>
        </Navbar>
        <ReactMarkdown markdown={markdown}></ReactMarkdown>
      </section>
      <section className='section_activity'>
        <RecentActivity />
      </section>
    </div>
  );
};

export default topicSection;
