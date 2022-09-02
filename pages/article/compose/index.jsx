import React, { useState } from "react";
import style from "../../../styles/article.module.css";
import Navbar from "../../../components/header/Navbar";
import RecentActivity from "../../../components/sidebar/RecentActivity";

const Compose = () => {
  const [markdown, updateMarkdown] = useState("");
  const [preview, setPreview] = useState(false);
  return (
    <div className="flex f-start">
      <section className={style.article_main_section}>
        <Navbar>
          <h3>Article Topic</h3>
        </Navbar>
      </section>
      <section className="section_activity">
        <RecentActivity></RecentActivity>
      </section>
    </div>
  );
};

export default Compose;
