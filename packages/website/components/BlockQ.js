import React from "react";
import Link from "next/link";
import renderHTML from "react-render-html";
import vars from "../vars";

const Post = ({ block }) => {
  if (!block.blockName) return null;
  return (
    <div className={`block block--${block.blockName.replace("/", "-")}`}>
      {renderHTML(block.innerHTML)}
      <style jsx>{`
        :global(.wp-block-image) {
          margin: 3rem 0;
        }
        :global(.wp-block-image figcaption) {
          text-align: center;
          color: grey;
          font-size: 0.85rem;
          margin-top: 0.2rem;
        }

        .block {
          max-width: ${vars.widthMedium};
          margin: auto;
        }

        .block--core-image {
          max-width: ${vars.widthLarge};
        }

        :global(figure) {
          margin: 0;
        }

        :global(.wp-block-image img) {
          margin: 0;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default Post;
