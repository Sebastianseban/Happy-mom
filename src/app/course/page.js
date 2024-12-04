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

        <div className="w-full h-[80%] overflow-y-scroll">
          <div className="flex justify-evenly w-full">
            <div className=" w-[155px] ">
              <img src="/cardimg1.svg" alt="" />
              <div className="bg-[#ffffff65] rounded-b-lg p-2 ">
                <p className="text-black text-[10px] text-center">
                  Mindful meditation (1 year) 200 RS
                </p>
              </div>
            </div>

            <div className=" w-[155px] ">
              <img src="/cardimg2.svg" alt="" />
              <div className="bg-[#ffffff65] rounded-b-lg p-2 ">
                <p className="text-black text-[10px] text-center">
                  10 Myths On Marriage <br /> 200 RS
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-evenly w-full mt-6">
            <div className=" w-[155px] ">
              <img src="/cardimg3.svg" alt="" />
              <div className="bg-[#ffffff65] rounded-b-lg p-2 ">
                <p className="text-black text-[10px] text-center">
                Premarital Counselling(Islam)
                1000 RS
                </p>
              </div>
            </div>

            <div className=" w-[155px] ">
              <img src="/cardimg4.svg" alt="" />
              <div className="bg-[#ffffff65] rounded-b-lg p-2 ">
                <p className="text-black text-[10px] text-center">
                HappyMom <br />
                600 RS
                </p>
              </div>
            </div>
          </div>


          <div className="flex justify-evenly w-full mt-6">
            <div className=" w-[155px] ">
              <img src="/cardimg5.svg" alt="" />
              <div className="bg-[#ffffff65] rounded-b-lg p-2 ">
                <p className="text-black text-[10px] text-center">
                Premarital Counselling(Islam)
                1000 RS
                </p>
              </div>
            </div>

            <div className=" w-[155px] ">
              <img src="/cardimg6.svg" alt="" />
              <div className="bg-[#ffffff65] rounded-b-lg p-2 ">
                <p className="text-black text-[10px] text-center">
                  10 Myths On Marriage <br /> 200 RS
                </p>
              </div>
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
