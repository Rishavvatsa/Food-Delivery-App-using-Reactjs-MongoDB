import React, { useState, useEffect } from "react";
import BiryaniImg1 from "../images/img/biryani3.png";
import BiryaniImg2 from "../images/img/biryani5.png";
import BiryaniImg3 from "../images/img/biryani2.png";
import b1 from "../images/img/r3.png";
import logo from "../images/img/delivery.png";
import { Link } from "react-router-dom";
import Vector from "../images/img/v1.jpg";
const ImageList = [
  {
    id: 1,
    img: BiryaniImg1,
  },
  {
    id: 2,
    img: BiryaniImg2,
  },
  {
    id: 3,
    img: BiryaniImg3,
  },
  {
    id: 4,
    img: b1,
  },
];

const Hero = () => {
  const [imageId, setImageId] = useState(BiryaniImg1);

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % ImageList.length;
      setCurrentIndex(nextIndex);
      setImageId(ImageList[nextIndex].img);
    }, 7000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <div
        className="min-h-[550px] sm:min-h-[600px] bg-gray-100 flex justify-center items-center duration-200 border rounded-2xl shadow-2xl sm:min-w-full sm:max-w-[500px]"
        style={bgImage}
      >
        <div className="container pb-8 sm:pb-0">
          <div className="flex gap-3 bg-orange-300 w-36 px-2  mt-2 items-center rounded-full">
            <p className="text-sm font-medium text-slate-900">Bike Delivery</p>
            <img src={logo} className="h-7 rounded-md" alt="bike delivery" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* text content section */}
            <div
              data-aos="zoom-out"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
            >
              <h1 className="text-3xl sm:text-6xl lg:text-7xl font-bold">
                stay healthy and{" "}
                <span className="text-cartNumBg">choose your taste</span>{" "}
              </h1>
              <p className="text-lg ">
                Food is symbolic of love when words are inadequate
              </p>
              <div>
                <Link to={"menu/64cbcd29d28623ffce0bb3e3"}>
                  <button className="bg-gradient-to-r from-orange-400 to-red-500 hover:scale-75  duration-200 text-white py-3 px-4 rounded-full">
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
            {/* Image section */}
            <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <img
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  data-aos-once="true"
                  src={imageId}
                  alt="biryani img"
                  className="w-[300px] sm:w-[450px] sm:scale-125  mx-auto spin "
                />
              </div>
              <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/70 border-1 rounded-full drop-shadow-2xl">
                {ImageList.map((item, index) => (
                  <img
                    key={item.id}
                    data-aos="zoom-in"
                    data-aos-duration="400"
                    data-aos-once="true"
                    src={item.img}
                    onClick={() => {
                      setCurrentIndex(index);
                      setImageId(item.img);
                    }}
                    alt="biryani img"
                    className={`max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200 ${
                      index === currentIndex ? "border-1 border-orange-500" : ""
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
