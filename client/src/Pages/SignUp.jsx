import React, { useState } from 'react';
import login from '../images/img/login-animation.gif';
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-hot-toast";
import { ImagetoBase64 } from '../utils/ImagetoBase64';
const SignUp = () => {
  const navigate = useNavigate();
 const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(prev => !prev);
  };

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image:""
   
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUploadProfileImage = async(e)=>{
    const data = await ImagetoBase64(e.target.files[0])


    setData((preve)=>{
        return{
          ...preve,
          image : data
        }
    })

}

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { firstName, email, password, confirmPassword } = data;
    if (firstName && email && password && confirmPassword) {
      if (password === confirmPassword) {
    
          const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}signup`,{
            method : "POST",
            headers : {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body : JSON.stringify(data)
          })

          const dataRes = await fetchData.json()
       

        
        toast(dataRes.message)
        if(dataRes.alert){
          navigate("/login");
        }
       
      } else {
        alert("password and confirm password not equal");
      }
    } else {
      alert("Please Enter required fields");
    }
  };

  return (
    <div className='p-3 md:p-4'>
      <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-2'>
      <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative ">
          <img src={data.image ? data.image :  login} className="w-full h-full" alt=''/>

          <label htmlFor="profileImage">
            <div className="absolute bottom-0 h-1/3  bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer">
              <p className="text-sm p-1 text-white">Upload</p>
            </div>
            <input type={"file"} id="profileImage" accept="image/*" className="hidden" onChange={handleUploadProfileImage}/>
          </label>
        </div>

        <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>
        <label htmlFor='firstName'>FirstName</label>
          <input type="text" id='firstName' name='firstName' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded' value={data.firstName} onChange={handleOnChange} />

          <label htmlFor='lastName'>LastName</label>
          <input type="text" id='lastName' name='lastName' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded' value={data.lastName} onChange={handleOnChange} />

          <label htmlFor='email'>Email</label>
          <input type="email" id='email' name='email' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded' value={data.email} onChange={handleOnChange} />

          <label htmlFor='password'>Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-black-300">
            <input type={showPassword ? "text" : "password"} id='password' name='password' className='mt-1 mb-2 w-full bg-slate-200 rounded border-none outline-none' value={data.password} onChange={handleOnChange} />
            <span className='text-xl cursor-pointer' onClick={handleShowPassword}>
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <label htmlFor='confirmPassword'>Confirm Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-black-300">
            <input type={showConfirmPassword ? "text" : "password"} id='confirmPassword' name='confirmPassword' className='mt-1 mb-2 w-full bg-slate-200 rounded border-none outline-none' value={data.confirmPassword} onChange={handleOnChange} />
            <span className='text-xl cursor-pointer' onClick={handleShowConfirmPassword}>
              {showConfirmPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button className="w-full max-w-[150px] m-auto  bg-red-500 hover:bg-red-600 cursor-pointer  text-white text-xl font-medium text-center py-1 rounded-full mt-4">
            Sign up
          </button>
        </form>
        <p className="text-left text-sm mt-2">
          Already have account ?{" "}
          <Link to={"/login"} className="text-red-500 underline">
            Login
          </Link>
          </p>
      </div>
    </div>
  );
};

export default SignUp;
