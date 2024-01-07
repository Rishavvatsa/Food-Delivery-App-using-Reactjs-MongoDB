import React from "react";
import "./category.css";
import i1 from "../images/img/62b0b19dbc5f55c4206158f7_choose-your-meals (1).svg";
import i2 from "../images/img/62b0b19b358b954d12f769ba_we-cook-deliver (1).svg";
import i3 from "../images/img/62b0b19b53e85f79fe3374c5_chill-reheat.svg";
import i4 from "../images/img/62b0b19b83b282277e15a7af_eat-repeat.svg";
import { Link } from "react-router-dom";
const Homecategory = () => {
  return (
    <div className="homecategory">
      <div className="container">
        <img src={i1} alt="" />
        <div className="content">
        <h1>Choose your meals</h1>
        <p>Rotating menu of 50+ balanced dishes.</p>
        <Link to={"menu/64cbcd29d28623ffce0bb3e3"}>  <button>Order Now</button></Link>
        </div>
      </div>
      <div className="container">
        <img src={i2} alt="img3" className="chill"/>
        <div className="content">
        <h1>We Cook & Deliver</h1>
        <p>Fully-cooked meals sent fresh, not frozen.</p>
        <Link to={"menu/64cbcd29d28623ffce0bb3e3"}>  <button>Order Now</button></Link>
        </div>
      </div>
      <div className="container">
        <img src={i3} alt="i3"  />
        <div className="content">
        <h1>Chill & Reheat</h1>
        <p>Refrigerate meals & reheat in 3 minutes.</p>
        <Link to={"menu/64cbcd29d28623ffce0bb3e3"}>  <button>Order Now</button></Link>
        </div>
      </div>
      <div className="container">
        <img src={i4} alt="img3" />
        <div className="content">
          <h1>Eat & Repeat</h1>
          <p>Change meals, skip a week, or cancel any time.</p>
          <Link to={"menu/64cbcd29d28623ffce0bb3e3"}>  <button>Order Now</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Homecategory;
