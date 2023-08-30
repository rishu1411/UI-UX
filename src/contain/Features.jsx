import Feature from '@/components/Feature'
import React from 'react'

export default function Features() {
  let title1 = 'Improving and distrusts instantly'
  let title2 = 'Become the tended active'
  let title3 = 'Message or am nothing'
  let title4 = 'Really boy law count'
  let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod alias corporis, ad ipsam quisquam vitae. Distinctio in optio eligendi facilis?'
  let name = `flex flex-row  items-center justify-between  gap-x-6 mb-4`
  return (
    <div className='section_margin flex gap-x-12 flex-col md:flex-row gap-y-6' id='possibility'>
      <div className='space-y-4 flex-1'>
        <h1 className='gradient-text'>The Future is Now and You Just Need to Realize it. Step into Future Today & Make it Happen.</h1>
        <p className='text-orange-400 text-sm'>Request Early Access To Get Started</p>
        
      </div>
      <div className='flex-1 gap-x-8'>
        <Feature title={title1} text={ text} className={name}/>
        <Feature title={title2} text={ text} className={name}/>
        <Feature title={title3} text={ text} className={name}/>
        <Feature title={title4} text={ text} className={name}/>
       
      </div>
    </div>
  )
}
