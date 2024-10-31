import { images } from "@/public/images";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="w-11/12 lg:w-3/4 mx-auto flex flex-col lg:flex-row items-center">
        {/* Contact Image */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-10">
          <Image
            src={images.contactUs}
            alt="Contact Us"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
            width={600}
            height={400}
          />
        </div>

        {/* Subscription Form */}
        <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Stay in Touch
          </h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter to get the latest updates and offers.
          </p>

          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
