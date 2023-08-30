import React from 'react'

export default function Feature({title,text,className}) {
  return (
    <div className={className}>
      <div className='flex flex-col  mb-[1rem]'>

        <div className='bar-gradient h-[3px] max-w-[2rem] rounded-md mb-2'></div>
        <h1 className='text-white font-semibold text-lg lg:text-2xl max-w-[12rem]'>{title}</h1>
      </div>
      <div>
        <p className='lg:max-w-[420px] w-full text-sky-300 text-sm lg:text-base'>{ text}</p>
      </div>
    </div>
  )
}
