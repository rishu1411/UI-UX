'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardMedia } from '@mui/material';

export default function ActionAreaCard({ src, title, text, className}) {
    let mon = ['Jan','Feb',"Mar",'Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec']
    let d = new Date()
    let da = d.getDate()
    let year = d.getFullYear()
    let month = d.getMonth()

  return (
      <Card sx={{
          maxWidth: 400,
          maxHeight: 700,
         
      }} className={ className}>
          <CardActionArea className='space-y-1'>
              <Image src={ src} alt='hello'/>
              <CardContent className='space-y-2'>
                  <Typography gutterBottom variant='p' component='span' className='text-white text-xs'>{ `${da}-${mon[month]}-${year}`}</Typography>
                  <Typography gutterBottom variant="h5" component="div" className='text-white text-xl' >
                      { title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className='text-sky-300 text-xs'>
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
