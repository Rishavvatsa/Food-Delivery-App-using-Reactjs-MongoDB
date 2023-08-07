import React, {  useRef} from "react";
import { useSelector } from "react-redux";
import logo from "../images/img/delivery.png";
import CardFeature from "./CardFeature";
import Home from "../Pages/Home";
import { GrPrevious, GrNext } from "react-icons/gr";
import Cardcontainer from "./Cardcontainer";
import { Link } from "react-router-dom";

const MainContainer = () => {

  const productData = useSelector((state) => state.product.productList);
  const homeProductCartList = productData.slice(1, 5);
  const homeProductCartListVegetables = productData.filter(
    (el) => el.category === "vegetable",
    []
  );
  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2">
        <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
        <p className="text-sm font-medium text-slate-900">Bike Delivery</p>

          <img src={logo} className="h-7 rounded-md" alt="bike delivery" />
        </div>
          <h2 className="text-4xl md:text-7xl font-bold py-3">
           The Fastest Delivery in
          <span className="text-red-600 text-[3rem] lg:text-[5rem]">
            Your City
          </span>
          </h2>
          <p className="text-base text-textColor text-center md:text-left md:w-[80%] py-3">
          Why step out when you can get everything delivered home with the tap
          of a button? Bangalore’s favourite delivery app gets you Food,
          Grocery, Medicine, Pet Supplies, Fruits & Vegetables, Meat & Fish,
          Health & Wellness, Gifts and Send Packages from one end of the city to
          the other. From your local kirana stores to your favourite brands,
          grocery shopping to your forgotten charger, we are always on the move
          for you. Why worry about your chores, when you can get it all Dun!
        </p>
        <Link to={"menu/64cbcd29d28623ffce0bb3e3"}>
          <button className="font-bold bg-orange-500 text-slate-200 px-4 py-2 rounded-md" >
            Order Now
          </button>
          </Link>
        </div>

        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {homeProductCartList[0]
            ? homeProductCartList.map((el) => {
                return (
                  <Home
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                );
              })
            : loadingArray.map((el, index) => {
                return <Home key={index+"loading"} loading={"Loading..."} />;
              })}
        </div>
      </div>

      <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">
            Fresh Vegetables
          </h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg  p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded "
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {homeProductCartListVegetables[0]
            ? homeProductCartListVegetables.map((el) => {
                return (
                  <CardFeature
                    key={el._id+"vegetable"}
                    id={el._id}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    image={el.image}
                  />
                );
              })
            : loadingArrayFeature.map((el,index) => (
                <CardFeature loading="Loading..." key={index+"cartLoading"} />
              ))}
        </div>
      </div>
      
      <Cardcontainer heading={"Your Product"}/>
    </div>
  );
};

export default MainContainer;