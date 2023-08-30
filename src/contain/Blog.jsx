import React from 'react'
import Image from 'next/image'
import blog1 from '../assets/blog01.png'
import blog2 from '../assets/blog02.png'
import blog3 from '../assets/blog03.png'
import blog4 from '../assets/blog04.png'
import blog5 from '../assets/blog05.png'
import Cards from '../components/Cards.jsx'


function Layout1() {
  let title1 = 'GPT and AI is the future. Let us explore how it is?'
  let text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, perferendis.'
  let cl1 = 'bg-footer rounded-tl-[25px]  xl:h-[342px]'
  let cl2 = 'bg-footer rounded-tl-[25px] h-[475px] xl:h-[900px]'
  return (
    <div className='hidden xl:flex gap-x-4 items-start flex-col xl:flex-row gap-y-6 '>
    <Cards src={blog1} title={title1} text={text} className={cl2}/>
    <div className='space-y-4'>
    <Cards src={blog2} title={title1} text={text} className={cl1}/>
    <Cards src={blog3} title={title1} text={text} className={cl1}/>

    </div>
    <div className='space-y-4'>
    <Cards src={blog4} title={title1} text={text} className={cl1} />
    <Cards src={blog5} title={title1} text={text} className={cl1}/>

    </div>
  </div>
  )
}

function Layout2() {
  
    let title1 = 'GPT and AI is the future. Let us explore how it is?'
  let text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, perferendis.'
  let cl1 = 'bg-footer rounded-tl-[25px] h-[475px]'
  let cl2 = 'bg-footer rounded-tl-[25px] h-[475px] xl:h-[1400px]'
  return (
    <div className='grid xl:hidden lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-6 place-content-between'>
    <Cards src={blog1} title={title1} text={text} className={cl2}/>
    <Cards src={blog2} title={title1} text={text} className={cl1}/>
    <Cards src={blog3} title={title1} text={text} className={cl1}/>
    <Cards src={blog4} title={title1} text={text} className={cl1} />
    <Cards src={blog5} title={title1} text={text} className={cl1}/>

  </div>
  )
}
  
export default function Blog() {
 
  
  return (
    <div className='section_margin space-y-8'>
      <div>
        <h2 className='gradient-text max-w-[70%] leading-loose '>A lot is happening, We are blogging about it.</h2>
      </div>
     <Layout1/>
     <Layout2/>
    </div>
  )
}
