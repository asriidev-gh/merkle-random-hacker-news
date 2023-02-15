import React, { useEffect, useState } from "react";
import randomImg1 from "../images/random-1.jpeg";
import randomImg2 from "../images/random-2.jpeg";
import randomImg3 from "../images/random-3.jpeg";
import randomImg4 from "../images/random-4.jpeg";
import randomImg5 from "../images/random-5.jpeg";
import randomImg6 from "../images/random-6.jpeg";
import randomImg7 from "../images/random-7.jpeg";
import randomImg8 from "../images/random-8.jpeg";
import randomImg9 from "../images/random-9.jpeg";
import randomImg10 from "../images/random-10.jpeg";

export interface INewsCardImageProps {}

export default function NewsCardImage(props: INewsCardImageProps) {
  const images = [
    randomImg1,
    randomImg2,
    randomImg3,
    randomImg4,
    randomImg5,
    randomImg6,
    randomImg7,
    randomImg8,
    randomImg9,
    randomImg10,
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(1);

  useEffect(() => {
    const changeImage = () => {
      const randomNumber = Math.floor(Math.random() * images.length);
      setCurrentImageIndex(randomNumber);
    };
    changeImage();
  }, [images.length]);

  return (
    <div>
      <img src={images[currentImageIndex]} alt="" />
    </div>
  );
}
