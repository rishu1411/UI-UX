'use client'
import React, { useState} from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import Link from 'next/link'



export default function NavMenu({ value}) {
    const[toggleMenu,setToggleMenu] = useState(false)
  return (
      <>
          {toggleMenu ? 
              <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(!toggleMenu)} className='cursor-pointer'/>:
                  <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(!toggleMenu)} className='cursor-pointer'/>
          }
          {toggleMenu && (
             
                  <div className="absolute top-24 right-0 animate-scaleUpCenter transition-all duration-500 repeat-2 " >
                      { value}
                  </div>
              
          )}
    </>
  )
}
