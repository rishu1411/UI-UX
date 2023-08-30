import React from 'react'
import slack from '../assets/slack.png'
import google from '../assets/google.png'
import shopify from '../assets/shopify.png'
import dropbox from '../assets/dropbox.png'
import atlassian from '../assets/atlassian.png'
import Image from 'next/image'

export default function Brand() {
  return (
    <div 
    className='flex section_padding space-x-8 wrap gap-y-4 items-center justify-center'>
      <div >
        <Image src={google} alt='google' className='max-w-[150px] min-w-[120px]'/ >
      </div>
      <div>
        <Image src={slack} alt='goggle' className='max-w-[150px] min-w-[120px]'/ >
      </div>
      <div>
        <Image src={atlassian} alt='goggle' className='max-w-[150px] min-w-[120px]'/ >
      </div>
      <div>
        <Image src={shopify} alt='goggle' className='max-w-[150px] min-w-[120px]'/ >
      </div>
      <div>
        <Image src={dropbox} alt='goggle' className='max-w-[150px] min-w-[120px]'/ >
      </div>
    </div>
  )
}
