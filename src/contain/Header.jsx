import React from 'react'
import Image from 'next/image'
import NavButton from '@/components/Buttons'
import people from '@/assets/people.png'
import Ai from '@/assets/ai.png'

// NOTE: change src file in tailwind.config.js files, by default it only includes components,app, and pages folders inside source file.

export default function Header() {
  return (
    <section className='section_padding flex items-center flex-col md:flex-row justify-center gap-y-8'>
      <div className="flex flex-col space-y-8 ">
        <span>
          <h1 className='gradient-text mb-4'>Lets Build Something amazing with GPT-3 OpenAI</h1>
      <p className='text-sky-300 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ad velit voluptates, quas cupiditate delectus dolorum doloremque modi nemo corporis ab ea mollitia suscipit expedita.</p>
        </span>
        <span className='flex max-[640px]:flex-col flex-row max-[640px]:space-y-4 items-center'>
          <input type="email" placeholder='Enter your Email' className='px-4 outline-none py-[8.2px] bg-[#ffffff38] shadow-lg focus:shadow-violet-600 text-violet-400 w-[60%] max-[640px]:w-full' />
          <NavButton value='Get Started'/>
        </span>
        <span className='flex items-center space-x-4 text-white max-[640px]:flex-col flex-row max-[640px]:space-y-4'>
          <Image src={people} alt='people' />
          <p className='border border-white text-max-[640px] py-1 px-2 text-sm text-zinc-400'>1600 people requested access a visit in last 24 hours</p>
        </span>
      </div>
      <div className=''>
      <Image src={Ai} alt-='Ai-image' width={1200} className='w-[350px] md:w-[1200px]'/>
        
      </div>
     
   </section>
  )
}
