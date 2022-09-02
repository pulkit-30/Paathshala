import { Button, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import ReactMarkdown from "../../../components/utils/ReactMarkdown";
import style from "../../../styles/article.module.css";
import Navbar from "../../../components/header/Navbar";
import RecentActivity from "../../../components/sidebar/RecentActivity";
import Glass from "../../../components/ui/Glass";
import { Stack } from "@mui/system";

const Topics = () => {
  const [markdown, updateMarkdown] = useState("");
  const [preview, setPreview] = useState(false);
  return (
    <div className="flex f-start">
      <section className={style.article_main_section}>
        <Navbar>
          <h3>Article Topic</h3>
        </Navbar>
        {!preview && (
          <Glass>
            <TextField
              value={markdown}
              id="standard-textarea"
              placeholder="Your Article ...."
              minRows={33}
              multiline
              fullWidth
              variant="standard"
              InputProps={{
                disableUnderline: true,
                style: {
                  color: "var(--font-color)",
                  fontFamily: "Roboto",
                  fontWeight: 400,
                  fontSize: "18px",
                },
              }}
              onChange={(e) => updateMarkdown(e.target.value)}
            />
          </Glass>
        )}
        {preview && <ReactMarkdown markdown={markdown} />}
      </section>
      <section className="section_activity">
        <RecentActivity>
          <Stack
            direction={"row"}
            spacing={1}
            style={{
              margin: "10px auto",
            }}
          >
            <Button
              variant="outlined"
              onClick={() => {
                setPreview(false);
              }}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                setPreview(true);
              }}
            >
              Preview
            </Button>
          </Stack>
        </RecentActivity>
      </section>
    </div>
  );
};

export default Topics;
