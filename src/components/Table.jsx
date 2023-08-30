'use client'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material'


export default function Tables() {
  return (
      <TableContainer >
          <Table aria-label='simple table'>
              <TableHead >
                  <TableRow >
                      <TableCell className='text-white'>Links</TableCell>
                      <TableCell className='text-white'>Company</TableCell>
                      <TableCell className='text-white'>Get in Touch</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody></TableBody>
          </Table>
    </TableContainer>
  )
}
