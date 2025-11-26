import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const fadeImages = [
  {
    url: "slide1.png",
    caption: "Ngược dòng thời gian",
  },
  {
    url: "slide2.png",
    caption: "Mặt nạ của vợ",
  },
  {
    url: "slide3.png",
    caption: "Tôi làm bảo mẫu ở lảnh cung",
  },
  {
    url: "slide4.png",
    caption: "Supper men đại chiến khủng long bạo chúa",
  },
];

const Banner = () => {
  
  return (
    <div className="slide-container relative">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index} className="relative">
            {/* Ảnh */}
            <img
              style={{ width: "100%", objectFit: "cover" }}
              src={fadeImage.url}
              className="h-[400px]"
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <h2 className="absolute bottom-10 left-10 text-white text-4xl font-extrabold drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]">
              {fadeImage.caption}
            </h2>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Banner;
