import React from 'react'

export default function Footer() {
  return (
    <footer className='p-5 bg-footer'>
      <div className='flex flex-col items-center gap-y-8'>
        <h2 className='gradient-text'>Do you want to step in to the future before others</h2>
        <button className='text-white border border-white w-[12rem] px-2 py-2 text-sm'>Request Early Access</button>
      </div>
      <div className='flex mt-20 mb-6 lg:px-10 gap-y-8 justify-between flex-wrap'>
        <div className='w-[15rem] hidden sm:block '>
          <h1 className='text-white font-semibold text-xl'>GPT-3</h1>
          <p className='text-xs text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      
        <div className='space-y-4 text-white'>
          <h5 className='font-semibold'>Links</h5>
          <p className='text-sm'>Overons</p>
          <p className='text-sm'>Social Media</p>
          <p className='text-sm'>Counters</p>
          <p className='text-sm'>Contact</p>
        </div>
        
        <div className='space-y-4 text-white'>
          <h5 className='font-semibold'>Company</h5>
          <p className='text-sm'>Terms & Conditions</p>
          <p className='text-sm'>Social Privacy policy</p>
          <p className='text-sm'>Contact</p>
        </div>
        
        <div className='space-y-4 text-white'>
          <h5 className='font-semibold'>Get in Touch</h5>
          <p className='text-sm'>Lorem, ipsum.</p>
          <p className='text-sm'>085-132567</p>
          <p className='text-sm'>info@payment</p>
          </div>

      </div>
         <p className='text-center text-white'>&copy; 2023 GPT-3 All Rights Reserved</p>
    </footer>
  )
}
