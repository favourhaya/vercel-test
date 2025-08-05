import { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import FadeInOnScroll from './Fadein';
function Faq() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=" hidden md:block justify-center w-380 text-2xl justify-self-center">
        <FadeInOnScroll>
            <hr className=" mt-20" />
        <div className="mt-20  h-200">
        <h1 className='text-center font-bold text-[#363636] text-[90px] '>Frequently asked <span className="text-[#E37345]">questions</span></h1>
        <section className="mt-10 p-5 h-100 drop-shadow-2xl">

     <Accordion className='bg-[#F0F0F0] '>
        <AccordionSummary

          sx={{
    backgroundColor: '#2C84AC',
    '& .MuiAccordionSummary-content': {
      backgroundColor: 'transparent',// optional if you want inner area to match
    },
  }}
          className='h-20   bg-[#F0F0F0] '
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className="font-extrabold text-white" component="span">Do you provide equipment?</Typography>
        </AccordionSummary>
        <AccordionDetails className='h-20    '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>





      <Accordion className=''>
        <AccordionSummary
          sx={{
    backgroundColor: '#2C84AC',
    '& .MuiAccordionSummary-content': {
      backgroundColor: 'transparent', // optional if you want inner area to match
    },
  }}
          className='h-20'
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className='text-white' component="span">Are none DCU students allowed to join?</Typography>
        </AccordionSummary>
        <AccordionDetails className='h-20'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>











      <Accordion className=''>
        <AccordionSummary
          sx={{
    backgroundColor: '#2C84AC',
    '& .MuiAccordionSummary-content': {
      backgroundColor: 'transparent', // optional if you want inner area to match
    },
  }}
          className='h-20'
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className='text-white' component="span">Do you do rope climbing ?</Typography>
        </AccordionSummary>
        <AccordionDetails className='h-20'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>









      <Accordion className=''>
        <AccordionSummary
          sx={{
    backgroundColor: '#2C84AC',
    '& .MuiAccordionSummary-content': {
      backgroundColor: 'transparent', // optional if you want inner area to match
    },
  }}
          className='h-20'
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className="text-white" component="span">Do you sell merch? </Typography>
        </AccordionSummary>
        <AccordionDetails className='h-20'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>


      </section>
      </div>
</FadeInOnScroll>
    </div>









 <div className=" block md:hidden absolute justify-center w-[] text-md top-1400 justify-self-center">
        <FadeInOnScroll>
        <div className="mt-30  h-200">
            <hr className="mt-20 mb-20" />
        <h1 className='text-center font-bold text-[#363636] text-8xl
         '>Frequently asked <span className="text-[#E37345]">questions</span></h1>
        <section className="mt-10 p-5 h-100 drop-shadow-2xl">

     <Accordion className='bg-[#F0F0F0] '>
        <AccordionSummary

          sx={{
    backgroundColor: '#2C84AC',
    '& .MuiAccordionSummary-content': {
      backgroundColor: 'transparent',// optional if you want inner area to match
    },
  }}
          className='h-20   bg-[#F0F0F0] '
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className="font-extrabold  text-white" component="span">Do you provide equipment?</Typography>
        </AccordionSummary>
        <AccordionDetails className='h-20    '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>





      <Accordion className=''>
        <AccordionSummary
          sx={{
    backgroundColor: '#2C84AC',
    '& .MuiAccordionSummary-content': {
      backgroundColor: 'transparent', // optional if you want inner area to match
    },
  }}
          className='h-20'
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className='text-white' component="span">Are none DCU students allowed to join?</Typography>
        </AccordionSummary>
        <AccordionDetails className='h-20'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>











      <Accordion className=''>
        <AccordionSummary
          sx={{
    backgroundColor: '#2C84AC',
    '& .MuiAccordionSummary-content': {
      backgroundColor: 'transparent', // optional if you want inner area to match
    },
  }}
          className='h-20'
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className='text-white' component="span">Do you do rope climbing ?</Typography>
        </AccordionSummary>
        <AccordionDetails className='h-20'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>









      <Accordion className=''>
        <AccordionSummary
          sx={{
    backgroundColor: '#2C84AC',
    '& .MuiAccordionSummary-content': {
      backgroundColor: 'transparent', // optional if you want inner area to match
    },
  }}
          className='h-20'
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className="text-white" component="span">Do you sell merch? </Typography>
        </AccordionSummary>
        <AccordionDetails className='h-20'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>


      </section>
      </div>
</FadeInOnScroll>
    </div>



       
</>
  )
}

export default Faq
