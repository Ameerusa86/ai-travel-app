import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import reviewsData from "@/constants/reviews";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ReviewSlider = () => {
  return (
    <section className="bg-gray-100 py-10">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-10">
        Customer Reviews
      </h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        showDots={true}
        arrows={false}
        className="w-11/12 mx-auto"
      >
        {reviewsData.map((review, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 mx-3">
            {/* Reviewer Info */}
            <div className="flex items-center mb-4">
              <Image
                src={review.profilePicture}
                alt={review.reviewerName}
                className="w-12 h-12 rounded-full object-cover mr-4"
                width={48}
                height={48}
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {review.reviewerName}
                </h3>
                <p className="text-sm text-gray-500">{review.reviewDate}</p>
              </div>
            </div>

            {/* Review Content */}
            <p className="text-gray-700 mb-4">{review.reviewText}</p>

            {/* Rating */}
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={
                    i < review.rating ? "text-yellow-400" : "text-gray-300"
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default ReviewSlider;
