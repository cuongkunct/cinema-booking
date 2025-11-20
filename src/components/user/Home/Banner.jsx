import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const fadeImages = [
  {
    url: "https://cdn.moveek.com/storage/media/cache/large/6916e739a8387189858531.png",
    caption: "First Slide",
  },
  {
    url: "https://i.imgur.com/mIwN0c1.jpeg",
    caption: "Second Slide",
  },
  {
    url: "https://i.imgur.com/Y5KtvgL.png",
    caption: "Third Slide",
  },
];

const Banner = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img
              style={{ width: "100%", objectFit: "cover" }}
              src={fadeImage.url}
            />
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Banner;
