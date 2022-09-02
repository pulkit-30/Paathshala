import React from "react";
import ReactMarkdown from "../../components/utils/ReactMarkdown";
import style from "../../styles/article.module.css";
import Navbar from "../../components/header/Navbar";
import RecentActivity from "../../components/sidebar/RecentActivity";

const topicSection = () => {
  const markdown = `# hello
  my name is **Pulkit** **Gupta**
  ![](https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg)
  
  lol 🤣, that's not my photo
  `;
  return (
    <div className="flex f-start">
      <section className={style.article_main_section}>
        <Navbar>
          <h3>Article Topic</h3>
        </Navbar>
        <ReactMarkdown markdown={markdown}></ReactMarkdown>
      </section>
      <section className="section_activity">
        <RecentActivity />
      </section>
    </div>
  );
};

export default topicSection;
