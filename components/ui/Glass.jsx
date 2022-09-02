import React from "react";

const Glass = (props) => {
  return (
    <React.Fragment>
      <style jsx>
        {`
          .glass {
            background: #7f7f7f49;
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(7.1px);
            padding: 10px;
          }
        `}
      </style>
      <div
        className={props.className + " glass"}
        style={props.style}
        onClick={props.onClick}
      >
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default Glass;
