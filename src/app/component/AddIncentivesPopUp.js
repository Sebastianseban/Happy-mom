import React from 'react'

function AddIncentivesPopUp({toggleAddIncentivesPopUp}) {
  return (

    <div className='h-full w-full fixed backdrop-blur-[3px] top-0 left-0  flex justify-center items-center'>
    <div className='w-[333px]  bg-color rounded-[9px] p-3 '>

      <div className='pt-6'>
        <p className='text-black text-[12px] font-medium'>Add incentives</p>
        <p className='text-black text-[12px] font-medium'>PM Shaji</p>
      </div>

      <div className='pt-5'>
        <input className=' bg-white w-full h-[44px] rounded-md placeholder:text-[12px] placeholder:text-[#1C0707] p-2 font-extralight outline-none' placeholder='Select incentive types' type="text" />
        <input className=' bg-white w-full h-[44px] rounded-md placeholder:text-[12px] placeholder:text-[#1C0707] p-2 font-extralight outline-none mt-4' placeholder='Enter amount' type="text" />

      </div>

      <div className='flex justify-end gap-2 pt-4 mb-2'>
        <button className=' h-[39px] rounded-[10px] bg-white text-black text-[12px] font-medium p-2'>Pay incentive</button>
        <button onClick={toggleAddIncentivesPopUp} className='
         h-[39px] rounded-[10px] bg-white text-black text-[12px] font-medium p-2'>Cancel</button>

      </div>

    </div>
  </div>
 
  )
}

export default AddIncentivesPopUp