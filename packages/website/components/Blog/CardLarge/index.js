import React from "react";
import Link from "next/link";
import styles from "./card.module.scss";
import urlGenerator, { mediaResize } from "../../../lib/cloudinaryHelper";
import { Cloudinary } from "cloudinary-core";

const Card = ({ article }) => {
  if (!article.image) return <div>No image set</div>;
  const src = article.image.image.publicUrl;

  const videoUrl = mediaResize(src, {
    width: 620 * 2,
    crop: "pad",
    type: "video",
  });

  const imageUrl = mediaResize(src, {
    width: 620 * 2,
    crop: "pad",
  });

  return (
    <Link href={`/posts/${article.slug}`}>
      <a className={styles.card}>
        <div
          className={`${styles.imageWrapper} ${
            videoUrl.isVideo ? styles.imageWrapperVideo : ""
          }`}
        >
          {videoUrl.isVideo && (
            <video
              width="320"
              height="240"
              autoPlay
              loop
              muted
              poster={imageUrl.src}
              className={styles.video}
            >
              <source src={videoUrl.src} type="video/mp4" />
            </video>
          )}
          <img
            src={imageUrl.src}
            alt={article.image.alternativeText}
            className={styles.image}
          />
        </div>
        <div className={styles.body}>
          <p id="title" className="uk-text-large">
            {article.title}
          </p>
        </div>
      </a>
    </Link>
  );
};

export default Card;
