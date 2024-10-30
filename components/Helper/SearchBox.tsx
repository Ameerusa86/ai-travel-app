import React from "react";
import { FaMapMarkedAlt, FaCalendarAlt, FaUser } from "react-icons/fa";

const SearchBox = () => {
  return (
    <div className="bg-white shadow-xl rounded-lg p-6 flex flex-wrap items-center justify-between gap-4 mt-8 w-[90%] max-w-4xl mx-auto">
      {/* Location Field */}
      <div className="flex items-center space-x-3 w-full md:w-auto hover:bg-gray-100 p-2 rounded transition-colors duration-200">
        <FaMapMarkedAlt className="text-red-500 w-6 h-6" />
        <div>
          <p className="text-gray-700 font-semibold">Location</p>
          <input
            type="text"
            placeholder="Where are you going?"
            className="text-gray-500 text-sm outline-none border-b-2 border-transparent focus:border-red-500 transition-colors duration-300 bg-transparent placeholder-gray-400 w-full"
          />
        </div>
      </div>

      {/* Start Date Field */}
      <div className="flex items-center space-x-3 w-full md:w-auto hover:bg-gray-100 p-2 rounded transition-colors duration-200">
        <FaCalendarAlt className="text-red-500 w-6 h-6" />
        <div>
          <p className="text-gray-700 font-semibold">Start Date</p>
          <input
            type="date"
            defaultValue="2023-12-31"
            className="text-gray-500 text-sm outline-none border-b-2 border-transparent focus:border-red-500 transition-colors duration-300 bg-transparent w-full"
          />
        </div>
      </div>

      {/* End Date Field */}
      <div className="flex items-center space-x-3 w-full md:w-auto hover:bg-gray-100 p-2 rounded transition-colors duration-200">
        <FaCalendarAlt className="text-red-500 w-6 h-6" />
        <div>
          <p className="text-gray-700 font-semibold">End Date</p>
          <input
            type="date"
            defaultValue="2023-12-15"
            className="text-gray-500 text-sm outline-none border-b-2 border-transparent focus:border-red-500 transition-colors duration-300 bg-transparent w-full"
          />
        </div>
      </div>

      {/* Guest Field */}
      <div className="flex items-center space-x-3 w-full md:w-auto hover:bg-gray-100 p-2 rounded transition-colors duration-200">
        <FaUser className="text-red-500 w-6 h-6" />
        <div>
          <p className="text-gray-700 font-semibold">Guest</p>
          <p className="text-gray-500 text-sm">1 Guest 1 Room</p>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
