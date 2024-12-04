"use client"
import React, { useState } from 'react';
import { IoShareSocial } from "react-icons/io5";
import Footer from "./component/Footer";
import ResetPasswordPopUp from "./component/ResetPasswordPopUp";
import AddIncentivesPopUp from './component/AddIncentivesPopUp';


export default function Home() {

 
    const [isPopupVisible, setPopupVisible] = useState(false); // State to control popup visibility
   const [isAddIncentivesPopUp,setAddIncentivesPopUp] = useState(false);
    // Toggle the popup visibility 
    const togglePopup = () => {
      setPopupVisible(!isPopupVisible);
    };
    const toggleAddIncentivesPopUp = () =>{
      setAddIncentivesPopUp(!isAddIncentivesPopUp)
    }

  return (
    <div className="bg-img  h-[100vh]   ">


      <div className="px-[16px]">

        <div className="flex justify-between w-full items-center pt-[48px] pb-[75px] ">
          <h1 className="text-black text-[13px]">HAPPYMOM</h1>

          <IoShareSocial className="text-xl" />
        </div>

        <div className="w-full h-[125px] card-bg  rounded-[10px] flex justify-center items-center p-2 border-[1px] border-[#e4ffaf7e]">
          <div className="w-[30%]">
            <img src="userimg.svg" alt="" />
          </div>
          <div className="w-[70%] p-2">
            <div className="flex justify-between">
              <h1 className="text-black text-[12px]">PM.SHAJI</h1>
              <p className="text-black text-[8px]"> 9400056815</p>
            </div>

            <div className="flex pt-2">
              <img src="cardchip-img.svg" alt="" />
              <p className="text-black text-[11px] ml-1">10001</p>
            </div>

            <div className="pt-5">
              <h1 className="text-black text-[10px]">Valid Till</h1>
            </div>

            <div className="flex justify-between pt-2">
              <p className="text-black text-[10px]">10/10/2024</p>
              <p className="text-[#9A9A9A] text-[8px]">happymom.com.in</p>
            </div>
          </div>
        </div>


<div className="flex justify-between mt-6">

  <div  onClick={togglePopup} className="bg-[#7c954796] w-[80px] h-[48px] flex flex-col justify-center items-center rounded-md  ">
    <img src="password.svg" alt="" />
    <p  className="text-black text-[10px]">New password</p>
  </div>

  <div onClick={toggleAddIncentivesPopUp} className="bg-[#7c954796] w-[80px] h-[48px] flex flex-col justify-center items-center rounded-md  ">
    <img src="Incentives.svg" alt="" />
    <p className="text-black text-[10px]">Add Incentives</p>
  </div>

  <div className="bg-[#7c954796] w-[80px] h-[48px] flex flex-col justify-center items-center rounded-md  ">
    <img src="Wallet-icon.svg" alt="" />
    <p className="text-black text-[10px]">Wallet</p>
  </div>
</div>




        <div className="flex justify-between mt-9">
          <div className="w-[45px] h-[19px] bg-[#7c95477d] rounded-[3px] flex justify-center items-center">
            <p className="text-black text-[12px]">Name</p>
          </div>
          <div className="w-[55px] h-[19px] bg-[#7c954781] rounded-[3px] flex justify-center items-center">
            <p className="text-black text-[12px]">Position</p>
          </div>
        </div>


        <div className="mt-3 overflow-y-scroll h-[200px] ">
          <div className="w-full h-[46px] bg-gradient-to-r from-[#ffff] to-[#988871] rounded-[4px] flex  items-center px-2 mb-2 ">
            <p className="text-[10px] text-black">PM.Shaji</p>
          </div>
          <div className="w-full h-[46px] bg-gradient-to-r from-[#ffff] to-[#988871] rounded-[4px] flex  items-center px-2 mb-2 ">
            <p className="text-[10px] text-black">PM.Shaji</p>
          </div>
          <div className="w-full h-[46px] bg-gradient-to-r from-[#ffff] to-[#988871] rounded-[4px] flex  items-center px-2 mb-2 ">
            <p className="text-[10px] text-black">PM.Shaji</p>
          </div>

          <div className="w-full h-[46px] bg-gradient-to-r from-[#ffff] to-[#988871] rounded-[4px] flex  items-center px-2 mb-2 ">
            <p className="text-[10px] text-black">PM.Shaji</p>
          </div>

          <div className="w-full h-[46px] bg-gradient-to-r from-[#ffff] to-[#988871] rounded-[4px] flex  items-center px-2 mb-2 ">
            <p className="text-[10px] text-black">PM.Shaji</p>
          </div>

          <div className="w-full h-[46px] bg-gradient-to-r from-[#ffff] to-[#988871] rounded-[4px] flex  items-center px-2 mb-2 ">
            <p className="text-[10px] text-black">PM.Shaji</p>
          </div>



          
        </div>
       
      </div>

       <Footer />
     
        {/* Conditionally render ResetPasswordPopUp */}
        {
         isPopupVisible && 
         <ResetPasswordPopUp 
         togglePopup={togglePopup}
         />
        }
        

        {
  isAddIncentivesPopUp && <AddIncentivesPopUp toggleAddIncentivesPopUp={toggleAddIncentivesPopUp}/> 



        }
        
     
    </div>
    
  );
}
