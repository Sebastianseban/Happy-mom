import React from "react";
import { MdOutlineSettings } from "react-icons/md";
import Footer from "../component/Footer";

function page() {
  return (
    <div className="bg-img  h-full   ">
      <div className="px-[16px] h-full ">
        <div className="flex justify-between w-full items-center pt-[48px] pb-2 ">
          <h1 className="text-black text-[20px] z-50">Profile</h1>

          <MdOutlineSettings className="text-xl z-50" />
        </div>
      </div>
      <div className="flex w-full  xs:bg-[#ffffff4e] xs:py-4">
        <div className="text-[12px] text-black flex flex-col gap-y-2 justify-center items-center w-[40%]">
          <img className="w-[100px] z-50" src="/profilepic.svg" alt="" />
          <p className="z-50">Name</p>
          <p className="z-50">DOB</p>
          <p className="z-50">Position</p>
        </div>

        <div className="text-[12px] text-black flex flex-col gap-y-2 justify-center   w-[60%]">
          <p className="z-50">A/C No</p>
          <p className="z-50">Bank Name</p>
          <p className="z-50">Acc Holder</p>
          <p className="z-50">IFSC</p>
        </div>
      </div>

      <div className="px-[16px] mt-24 pb-40 ">
        <p className="text-[12px] text-black bg-[#ffffff9e] p-2 rounded">
          House Name
        </p>

        <div className="flex justify-between gap-4 mt-3">
          <p className="text-[12px] text-black bg-[#ffffff9e] p-2 rounded w-full">
          Post Office
          </p>

          <p className="text-[12px] text-black bg-[#ffffff9e] p-2 rounded w-full">
          Street
          </p>
        </div>

        <div className="flex justify-between gap-4 mt-3">
          <p className="text-[12px] text-black bg-[#ffffff9e] p-2 rounded w-full">
          Pincode
          </p>

          <p className="text-[12px] text-black bg-[#ffffff9e] p-2 rounded w-full">
          District
          </p>
        </div>

        <div className="flex justify-between gap-4 mt-3">
          <p className="text-[12px] text-black bg-[#ffffff9e] p-2 rounded w-full">
          State
          </p>

          <p className="text-[12px] text-black bg-[#ffffff9e] p-2 rounded w-full">
          Country
          </p>
        </div>

        <p className="text-[12px] text-black bg-[#ffffff9e] p-2 rounded mt-3">
        Adhar No
        </p>

        <p className="text-[12px] text-black bg-[#ffffff9e] p-2 rounded mt-3">
        Pan No
        </p>
      </div>
      

      <img className="w-full xs:w-0 absolute  -top-20    left-0  " src="/line.svg" alt="" />

      <Footer/>
    </div>
  );
}

export default page;
