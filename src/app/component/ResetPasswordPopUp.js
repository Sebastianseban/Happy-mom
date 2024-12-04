import React from 'react'

function ResetPasswordPopUp({togglePopup}) {
  return (
    <div className='h-full w-full fixed backdrop-blur-[3px] top-0 left-0  flex justify-center items-center'>
      <div className='w-[333px] h-[212px] bg-color rounded-[9px] p-2'>

        <div className='pt-6'>
          <p className='text-black text-[12px] font-medium'>Reset Password</p>
          <p className='text-black text-[12px] font-medium'>PM Shaji</p>
        </div>

        <div className='pt-5'>
          <input className=' bg-white w-full h-[44px] rounded-md placeholder:text-[12px] placeholder:text-[#1C0707] p-2 font-extralight' placeholder='Type new password' type="text" />
        </div>

        <div className='flex justify-end gap-2 pt-4'>
          <button className='w-[79px] h-[39px] rounded-[10px] bg-white text-black text-[12px] font-medium p-2'>Submit</button>
          <button onClick={togglePopup} className='w-[79px] h-[39px] rounded-[10px] bg-white text-black text-[12px] font-medium p-2'>Cancel</button>

        </div>

      </div>
    </div>
  )
}

export default ResetPasswordPopUp