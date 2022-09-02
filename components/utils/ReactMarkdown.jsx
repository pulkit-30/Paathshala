import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Glass from "../ui/Glass";

const markdown = (props) => {
  return (
    <Glass>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {props.markdown}
      </ReactMarkdown>
    </Glass>
  );
};

export default markdown;
