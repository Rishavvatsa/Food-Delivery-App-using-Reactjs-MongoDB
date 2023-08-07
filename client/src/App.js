import React,{useEffect} from "react";
import "./App.css";
import "./index.css";
import { Header } from "./Components";
import { Outlet, Route, Routes } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import Cart from "./Pages/Cart";
import { AnimatePresence } from "framer-motion";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Services from "./Pages/Services";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/login";

import { useStatevalues } from "./Context/StateProvider";
import { getAllFoodItems } from "./utils/firebasefunction";
import { actionType } from "./Context/reducer";
import Cartcontainer from "./Components/Cardcontainer";
import { useDispatch,useSelector } from "react-redux";
import { setDataProduct } from './utils/productSlide'
import { Toaster } from "react-hot-toast";
import Addcontainer from "./Pages/Addcontainer";
import Cancel from "./Pages/cancel";
import Success from "./Pages/success";
const App = () => {
  const dispatch = useDispatch()
  const productData = useSelector((state)=>state.product)
 
  useEffect(()=>{
    (async()=>{
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}products`)
      const resData = await res.json()
      dispatch(setDataProduct(resData))
    })()
  },[])

  return (
    <AnimatePresence mode="wait">
      <div className="w-screen h-auto flex flex-col bg-slate-200 fs-1 ">
        <Header />
        <Toaster/>
         <main className="mt-14 md:mt-20 md: px-16 py-4 w-full ">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="newproduct" element={<Addcontainer />} />
            <Route path="menu/:filterby" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/cart" element={<Cart/>} />
            <Route path="success" element={<Success/>}/>
            <Route path="cancel" element={<Cancel/>}/>
          </Routes>
          
        </main>
      </div>
    </AnimatePresence>
  );
};
export default App;
