import React from "react";
import { IoShareSocial } from "react-icons/io5";
import Footer from "../component/Footer";

function page() {
  return (
    <div className="bg-img  h-[100vh]  ">
      <div className="px-[16px] h-full">
        <div className="flex justify-between w-full items-center pt-[48px] pb-2 ">
          <h1 className="text-black text-[20px]">Courses</h1>

          <IoShareSocial className="text-xl" />
        </div>

        <div className="w-full h-[80%] grid grid-cols-2 overflow-y-scroll gap-4">
          <div className=" w-[155px] ">
            <img src="/cardimg1.svg" alt="" />
          <div className="bg-[#ffffff65] rounded-b-lg p-2 ">
          <p className="text-black text-[10px] text-center">Mindful meditation (1 year) 200 RS</p>
          </div>
          </div>

          <div className=" w-[155px] ">
            <img src="/cardimg1.svg" alt="" />
          <div className="bg-[#ffffff65] rounded-b-lg p-2 ">
          <p className="text-black text-[10px] text-center">Mindful meditation (1 year) 200 RS</p>
          </div>
          </div>

          <div className=" w-[155px] ">
            <img src="/cardimg1.svg" alt="" />
          <div className="bg-[#ffffff65] rounded-b-lg p-2 ">
          <p className="text-black text-[10px] text-center">Mindful meditation (1 year) 200 RS</p>
          </div>
          </div>

          <div className=" w-[155px] ">
            <img src="/cardimg1.svg" alt="" />
          <div className="bg-[#ffffff65] rounded-b-lg p-2 ">
          <p className="text-black text-[10px] text-center">Mindful meditation (1 year) 200 RS</p>
          </div>
          </div>

          <div className=" w-[155px] ">
            <img src="/cardimg1.svg" alt="" />
          <div className="bg-[#ffffff65] rounded-b-lg p-2 ">
          <p className="text-black text-[10px] text-center">Mindful meditation (1 year) 200 RS</p>
          </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default page;
