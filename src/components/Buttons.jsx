import React from 'react'

export default function NavButton({ value}) {
  return (
      <button type='button' className='bg-[#FF4820]  py-2 px-4 text-white font-semibold lg:text-[18px] text-sm leading-[25px] hover:bg-[#fa1120]'>{ value}</button>
  )
}
