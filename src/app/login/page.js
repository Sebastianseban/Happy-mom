"use client";
import Image from "next/image";
import eye from "../../../public/eye.svg"
import eyeoff from "../../../public/eyeoff.svg"
import { useState } from "react";


export default function Login() {
  const [show,setShow] = useState(false)
  return (
    <div className="flex justify-center items-center h-[100vh] font-[inter] bg-img">
      <div className="w-[328px] h-[298px] bg-color rounded-lg">
      <h1 className="text-center p-10  text-black text-[15px] ">Login</h1>

      <div className="p-3 flex  flex-col  text-black text-[12px]  ">
        <input className="bg-[#ffffff72] w-full h-[40px] p-2 rounded-[6px] mb-3 placeholder:text-[#1C0707]" placeholder="Mobile number" type="text" />
        <span className="relative">
        <input className="bg-[#ffffff72] w-full h-[40px] p-2 rounded-[6px] placeholder:text-[#1C0707]" placeholder="Password" type = {show?"text":"password"} />
       

       <Image  className="h-5 w-5 absolute right-2 bottom-3 opacity-40"  src={show?eyeoff:eye} onClick={(e)=>{
        setShow(!show)
       }}/>
        </span>
        <p className="text-[#5C5454] text-[10px]  pt-2 ">Forgot password</p>
       

      </div>
      <div className="px-3 ">
     
      <button className="bg-[#7c954760] w-full h-[40px] rounded-[6px] text-black text-[12px] ">Login</button>
      </div>
     
      </div>
    </div>
  );
}
