import React from 'react'

export default function CTA() {
  return (
    <div className='p-8 section_margin bar-gradient rounded-2xl flex items-center justify-between flex-col lg:flex-row gap-y-6' >
      <div>
        <p className='text-[10px] text-lg'>Request early access and get started</p>
        <h2 className='font-semibold text-xl'>Register Today And Start Exploring the endless possibilities.</h2>
      </div>
      <div>
        <button type='button' className='bg-black text-white px-4 py-2 w-auto rounded-full'>Get started</button>
      </div>

    </div>
  )
}
