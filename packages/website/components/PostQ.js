import React from "react";
import Link from "next/link";
import renderHTML from "react-render-html";
import Block from "./BlockQ";
import vars from "../vars";

const Post = ({ post }) => {
  if (!post) return null;
  return (
    <div className="post">
      <h2 className="title">
        <Link href="/posts/[pid]" as={`/posts/${post.slug}`}>
          <a>{post.title.rendered}</a>
        </Link>
      </h2>
      <div className="content">
        {post.blocks.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </div>

      <style scoped lang="scss">{`
        .title {
          font-size: 3rem;
          s
          font-weight: 400;
          margin: auto;
          max-width: ${vars.widthMedium};
        }
        .title a {
          text-decoration: none;
          color: #000;
        }
        .content {
          width: 100%;
          line-height: 1.75;
          font-size: 1.15rem;
        }
      `}</style>
    </div>
  );
};

export default Post;
