import React from "react";
import Link from "next/link";
import styles from "./multimedia.module.scss";
import urlGenerator, { mediaResize } from "../../lib/cloudinaryHelper";
import { Cloudinary } from "cloudinary-core";
import classnames from "classnames";

export default function MultimediaElement({ className, width = 620, src }) {
  if (!src) return <div>No image set</div>;
  const videoUrl = mediaResize(src, {
    width: width * 2,
    crop: "pad",
    type: "video",
  });

  const imageUrl = mediaResize(src, {
    width: width * 2,
    crop: "pad",
  });

  const classes = classnames(styles.imageWrapper, className, {
    [`${styles.imageWrapperVideo}`]: videoUrl.isVideo,
  });

  return (
    <div className={classes}>
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
        //alt={article.image.alternativeText}
        className={styles.image}
      />
    </div>
  );
}
