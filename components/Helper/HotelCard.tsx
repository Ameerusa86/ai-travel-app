import React from "react";
import Image, { StaticImageData } from "next/image";
import { FaStar } from "react-icons/fa";

interface HotelCardProps {
  image: string | StaticImageData;
  name: string;
  price: number;
  city: string;
  review: number;
}

const HotelCard = ({ image, name, price, city, review }: HotelCardProps) => {
  return (
    <div className="cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
      <div className="relative overflow-hidden w-full h-[250px]">
        <Image
          src={image}
          alt={name}
          layout="fill"
          className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>
      <div className="p-4 space-y-2">
        {/* Hotel Name and City */}
        <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
        <p className="text-sm text-gray-500">{city}</p>

        {/* Price */}
        <div className="text-xl font-bold text-red-600">
          ${price}{" "}
          <span className="text-sm font-medium text-gray-500">/ night</span>
        </div>

        {/* Review */}
        <div className="flex items-center space-x-1 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < review ? "text-yellow-400" : "text-gray-300"}
            />
          ))}
          <span className="ml-2 text-sm text-gray-500">({review})</span>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
