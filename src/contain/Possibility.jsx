import React from 'react'
import Image from 'next/image'
import possibility from '../assets/possibility.png'
export default function Possibility() {
  return (
    <div className='section_margin flex gap-x-12 gap-y-8 flex-col md:flex-row items-center'>
      <div className='flex-1'>
        <Image src={ possibility} alt='possibility' className='w-[350px] md:w-[1200px]'/>
      </div>
      <div className='flex-1 space-y-4'>
        <p className='text-stone-300'>Request Early Access to Get Started</p>
        <h1 className='gradient-text'>The possibilities are beyond your imagination</h1>
        <p className='text-sky-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis totam voluptatibus mollitia nam eligendi dolores voluptas harum fuga, recusandae quidem!</p>
        <p className='text-orange-400'>Request Early Access to get Started</p>
      </div>

    </div>
  )
}
