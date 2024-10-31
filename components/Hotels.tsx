import React from "react";
import HotelCard from "./Helper/HotelCard";
import { images } from "@/public/images";

const Hotels = () => {
  return (
    <section className="pt-20 bg-gray-100 pb-16">
      {/* Section Title */}
      <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        Best Hotels
      </h1>

      {/* Hotels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 mx-auto">
        {/* Example Hotel Cards */}
        <HotelCard
          image={images.hotel1}
          name="Luxury Palace"
          price={200}
          city="New York"
          review={4}
        />
        <HotelCard
          image={images.hotel2}
          name="Sunset Resort"
          price={150}
          city="Miami"
          review={5}
        />
        <HotelCard
          image={images.hotel3}
          name="Mountain Escape"
          price={180}
          city="Denver"
          review={4}
        />
        <HotelCard
          image={images.hotel4}
          name="Urban Retreat"
          price={220}
          city="San Francisco"
          review={4}
        />
        <HotelCard
          image={images.hotel5}
          name="Beachside Inn"
          price={130}
          city="Los Angeles"
          review={3}
        />
        <HotelCard
          image={images.hotel6}
          name="Countryside Lodge"
          price={110}
          city="Nashville"
          review={4}
        />
      </div>
    </section>
  );
};

export default Hotels;
