// import React from "react";

// function Footer() {
//   return (
//     <div className="w-full h-[64px] bg-gradient-to-r from-[#ccc9c9] to-[#988871b4] fixed bottom-0 flex justify-between items-center px-5">
//       <div>
//         <div className="rounded-full hover:bg-white w-8 h-8 flex  justify-center items-center">
//           <img src="home.svg" alt="" />
//         </div>
//         <p className="text-black text-[8px] text-center">Home</p>
//       </div>
//       <div className="flex flex-col justify-center  items-center"> 
//         <div className="rounded-full hover:bg-white w-8 h-8 flex justify-center items-center">
//           <img src="course.svg" alt="" />
//         </div>
//         <p className="text-black text-[8px] text-center">My Courses</p>
//       </div>
//       <div>
//         <div className="rounded-full hover:bg-white w-8 h-8 flex  justify-center items-center">
//           <img src="wallet.svg" alt="" />
//         </div>
//         <p className="text-black text-[8px] text-center">Wallet</p>
//       </div>

//       <div>
//         <div className="rounded-full hover:bg-white w-8 h-8 flex  justify-center items-center">
//           <img src="profile.svg" alt="" />
//         </div>
//         <p className="text-black text-[8px] text-center">profile</p>
//       </div>

     
//     </div>
//   );
// }

// export default Footer;

"use client"
import React, { useState } from "react";
import Link from "next/link";

function Footer() {
  const [selected, setSelected] = useState(null);

  const handleClick = (section) => {
    setSelected(section);
  };

  return (
    <div className="w-full h-[64px] bg-gradient-to-r from-[#ccc9c9] to-[#988871b4] fixed bottom-0 flex justify-between items-center px-5">
      <Link href="/" >
        <div
          onClick={() => handleClick("home")}
          className={`rounded-full w-8 h-8 flex justify-center items-center ${
            selected === "/" ? "bg-white" : "hover:bg-white"
          }`}
        >
          <img src="home.svg" alt="Home" />
        </div>
        <p className="text-black text-[8px] text-center">Home</p>
      </Link>

      <Link href="/course" >
        <div
          onClick={() => handleClick("courses")}
          className={`rounded-full w-8 h-8 flex justify-center items-center ${
            selected === "courses" ? "bg-white" : "hover:bg-white"
          }`}
        >
          <img src="course.svg" alt="My Courses" />
        </div>
        <p className="text-black text-[8px] text-center">My Courses</p>
      </Link>

      <Link href="/wallet" >
        <div
          onClick={() => handleClick("wallet")}
          className={`rounded-full w-8 h-8 flex justify-center items-center ${
            selected === "wallet" ? "bg-white" : "hover:bg-white"
          }`}
        >
          <img src="wallet.svg" alt="Wallet" />
        </div>
        <p className="text-black text-[8px] text-center">Wallet</p>
      </Link>

      <Link href="/profile" >
        <div
          onClick={() => handleClick("profile")}
          className={`rounded-full w-8 h-8 flex justify-center items-center ${
            selected === "profile" ? "bg-white" : ""
          }`}
        >
          <img src="profile.svg" alt="Profile" />
        </div>
        <p className="text-black text-[8px] text-center">Profile</p>
      </Link>
    </div>
  );
}

export default Footer;


// "use client";

// import React, { useState } from "react";
// import Link from "next/link";

// function Footer() {
//   const [selected, setSelected] = useState("home");

//   const handleClick = (section) => {
//     setSelected(section);
//   };

//   return (
//     <div className="w-full h-[64px] bg-gradient-to-r from-[#ccc9c9] to-[#988871b4] fixed bottom-0 flex justify-between items-center px-5">
//       <Link href="/">
//         <div
//           onClick={() => handleClick("/")}
//           className={`rounded-full w-8 h-8 flex justify-center items-center cursor-pointer ${
//             location.href.includes('/')  ? "bg-white" : "hover:bg-white"
//           }`}
//         >
//           <img src="home.svg" alt="Home" />
//         </div>
//         <p className="text-black text-[8px] text-center">Home</p>
//       </Link>

//       <Link href="/course">
//         <div
//           // onClick={() => handleClick("course")}s
//           className={`rounded-full w-8 h-8 flex justify-center items-center cursor-pointer ${
//             location.href.includes('course')  ? "bg-white" : "hover:bg-white"
//           }`}
//         >
//           <img src="course.svg" alt="My Courses" />
//         </div>
//         <p className="text-black text-[8px] text-center">My Courses</p>
//       </Link>

//       <Link href="/wallet">
//         <div
//           onClick={() => handleClick("wallet")}
//           className={`rounded-full w-8 h-8 flex justify-center items-center cursor-pointer ${
//             location.href.includes('wallet')  ? "bg-white" : "hover:bg-white"
//           }`}
//         >
//           <img src="wallet.svg" alt="Wallet" />
//         </div>
//         <p className="text-black text-[8px] text-center">Wallet</p>
//       </Link>

//       <Link href="/profile">
//         <div
//           onClick={() => handleClick("profile")}
//           className={`rounded-full w-8 h-8 flex justify-center items-center cursor-pointer ${
//             location.href.includes('profile')  ? "bg-white" : "hover:bg-white"
//           }`}
//         >
//           <img src="profile.svg" alt="Profile" />
//         </div>
//         <p className="text-black text-[8px] text-center">Profile</p>
//       </Link>
//     </div>
//   );
// }

// export default Footer;
