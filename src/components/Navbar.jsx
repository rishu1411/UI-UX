import React from 'react'

import Image from 'next/image'
import logo from '@/assets/logo.svg'
import Link from 'next/link'
import NavButton from './Buttons'
import NavMenu from './NavMenu'

export function Menu({className}) {
  return (
    <>
    <ul className={className}>
            <li><Link href='#home'>Home</Link></li>
            <li><Link href='#wgpt3'>What is GPT-3?</Link></li>
            <li><Link href='#possibility'>Open AI</Link></li>
            <li><Link href='#features'>Case Studies</Link></li>
        <li><Link href='#blog'>Library</Link></li>
        
          </ul>
    </>
  )
}

// BEM -> Block Element Modifier
export default function Navbar() {
  return (
    <div className='flex justify-between items-center lg:py-[2rem] lg:px-[6rem] p-[2rem] '>
     
      <div className='flex flex-1 justify-start items-center'>
        <div className='mr-[2rem]'>
          <Image src={logo} alt='logo' className='w-[62px] h-[16px]' />
        </div>
        <div className='link hidden md:flex'>
          <Menu className={'flex links'}/>
        </div>
      </div>
      <div className="links md:flex justify-end items-center space-x-4 hidden">
        <span className='cursor-pointer'>Sign in</span>
        <NavButton value='Sign up' />
        </div>
  
      <div className='block md:hidden'> 
        <NavMenu value={<Menu className={'flex flex-col text-white bg-footer p-4 space-y-4 min-w-[210px] items-center'}/>}/>
      </div>
    </div>
  )
}
