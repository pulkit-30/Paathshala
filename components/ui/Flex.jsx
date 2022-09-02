import React from "react";

const Flex = (props) => {
  return (
    <React.Fragment>
      <style jsx>
        {`
          .flex {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
      <div className={props.className + " flex"} style={props.style}>
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default Flex;
