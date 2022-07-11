import React from "react";
import Link from "next/link";
import renderHTML from "react-render-html";

const Post = ({ children }) => {
  return (
    <div className="wrapper">
      {children}

      <style jsx>{`
        .wrapper {
          //max-width: 780px;
          //margin: auto;
        }
      `}</style>
    </div>
  );
};

export default Post;
