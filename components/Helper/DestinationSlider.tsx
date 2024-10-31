import { images } from "@/public/images";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const DestinationSlider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 5,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 764 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      itemClass="item"
    >
      <div>
        <Image
          src={images.destination1}
          alt="destination"
          className="rounded-full mx-auto"
          height={200}
          width={200}
        />
        <h1 className="destination__h1">New York</h1>
        <p className="destination__p">7 Hotels</p>
      </div>
      <div>
        <Image
          src={images.destination2}
          alt="destination"
          className="rounded-full mx-auto"
          height={200}
          width={200}
        />
        <h1 className="destination__h1">Paris</h1>
        <p className="destination__p">5 Hotels</p>
      </div>
      <div>
        <Image
          src={images.destination3}
          alt="destination"
          className="rounded-full mx-auto"
          height={200}
          width={200}
        />
        <h1 className="destination__h1">London</h1>
        <p className="destination__p">3 Hotels</p>
      </div>
      <div>
        <Image
          src={images.destination4}
          alt="destination"
          className="rounded-full mx-auto"
          height={200}
          width={200}
        />
        <h1 className="destination__h1">Dubai</h1>
        <p className="destination__p">4 Hotels</p>
      </div>
      <div>
        <Image
          src={images.destination5}
          alt="destination"
          className="rounded-full mx-auto"
          height={200}
          width={200}
        />
        <h1 className="destination__h1">Tokyo</h1>
        <p className="destination__p">6 Hotels</p>
      </div>
      <div>
        <Image
          src={images.destination6}
          alt="destination"
          className="rounded-full mx-auto"
          height={200}
          width={200}
        />
        <h1 className="destination__h1">Rome</h1>
        <p className="destination__p">2 Hotels</p>
      </div>
    </Carousel>
  );
};

export default DestinationSlider;
