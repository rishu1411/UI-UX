import Feature from '@/components/Feature'
import React from 'react'

export default function WhatGpt3() {
  let title1 = 'What is GPT-3'
  let title2 = 'Chatbots'
  let title3= 'Knowledgebase'
  let title4= 'Education'
  let text = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quam sed suscipit officiis temporibus fugit fuga non architecto facere magni? '
  let name = `flex flex-col lg:flex-row items-start justify-between `
  let name2 = `flex flex-col  items-start justify-between `

  return (
    <div className='section_padding bg-footer section_margin space-y-8 max-h-[100rem]' id='wgpt3'>
      <div>
        <Feature title={title1} text={ text} className={name} flex_position={'row'}/>
      </div>
      <div className='flex text-gray-400 justify-between flex-col lg:flex-row gap-y-4 items-center'>
        <h1 className='gradient-text max-w-[70%] '>The possibilities are beyond your imagination  </h1>
        <p className='cursor-pointer'>Explore The Library</p>
      </div>
      <div className='flex justify-between gap-x-8 gap-y-8 flex-col lg:flex-row '>
       
        <Feature title={title2} text={text } className={name2}  />
        <Feature title={title3} text={text } className={name2}  />
        <Feature title={title4} text={text } className={name2}  />
    
      </div>

    </div>
  )
}
