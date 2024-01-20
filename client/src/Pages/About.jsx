import React from 'react';
import { FaUtensils, FaLeaf, FaHeart, FaUser, FaClock } from 'react-icons/fa'; 
import chefImage from '../images/img/pexels-william-choquette-2641886.jpg'; 
import chef1 from "../images/img/5f9c91fc2df3edb394de5aa2dd51e408.jpg"
import chef2 from "../images/img/chef2.avif"
const chefs = [
  {
    id: 1,
    name: 'Chef Marie Joshop',
    description:
      'With over 15 years of culinary expertise, Chef John brings a passion for flavors and creativity to every dish.',
    image: chef1,
  },
  {
    id: 2,
    name: 'Chef Jane Smith',
    description:
      'Chef Jane, a culinary innovator, combines traditional and modern techniques to create unique and unforgettable dining experiences.',
    image: chef2,
  },
];

const AboutUs = () => {
  return (
    <section id="about-us" className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-serif font-bold text-sky-500">
            <span className="text-orange-600">About</span> Us
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="border-2 rounded-lg overflow-hidden">
            <img
              src={chefImage}
              alt="Chef"
              className="w-full h-[1/2] object-cover filter drop-shadow-2xl shadow-black rounded-xl"
            />
          </div>
          <div className="mt-4 md:mt-0 font-serif">
            <div className="text-xl mb-4">
              <p className="font-semibold">
                Welcome to our food paradise! At{' '}
                <span className="text-orange-600">BiteBazaar</span>, we are passionate about
                delivering delightful culinary experiences that bring people together.
              </p>
            </div>
            <div className="mb-4">
              <FaUtensils className="inline-block mr-2 text-2xl text-red-500" />
              Our chefs are dedicated to crafting mouthwatering dishes using the finest ingredients.
            </div>
            <div className="mb-4">
              <FaLeaf className="inline-block mr-2 text-2xl text-green-500" />
              We prioritize fresh and locally sourced produce to create healthy and sustainable meals.
            </div>
            <div className="mb-4">
              <FaHeart className="inline-block mr-2 text-2xl text-pink-500" />
              Our mission is to make every dining experience a celebration of flavor and joy.
            </div>
            <div className="flex items-center mb-4 font-bold text-2xl justify-center ">
              <FaUser className="inline-block mr-2 text-2xl text-blue-500 " />
              Experienced Chefs
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 drop-shadow-2xl mr-5">
              {chefs.map((chef) => (
                <div key={chef.id} className="bg-white drop-shadow-lg p-4 rounded-lg shadow-lg">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-full h-[1/2] object-cover mb-4 rounded-xl"
                  />
                  <h3 className="text-xl font-bold mb-2 text-center">{chef.name}</h3>
                  <p className="text-sm text-center font-medium">{chef.description}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center mt-4 font-bold text-2xl">
              <FaClock className="inline-block mr-2 text-2xl text-yellow-500" />
              Quick and Fresh
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
