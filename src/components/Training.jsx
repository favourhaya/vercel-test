import { useState } from 'react'

import FadeInOnScroll from './Fadein'

function Training() {
  const [count, setCount] = useState(0)

  return (
    <>
    

<div className=" hidden md:block mt-40 h-180  text-[#363636] ">
    <hr className="" />
        
        <div className="mr-85 mt-7">
        <h2 className="text-[165px]  w-350 text-center pl-20  leading-40 mt-12 text-[#363636] font-bold">Training<span className="text-[#E37345] "> sessions</span></h2>
        <p className=" mt-10   text-2xl ml-[25%] text-center ">We hold training sessions 2-3x times a week. Our sessions are come as you go meaning you can come in and climb as much as you want without having book a slot.
            <br/> <span className='font-bold text-4xl'>Here are our times: </span></p>
        
        </div>

        <div className='flex justify-center'>
            <FadeInOnScroll>

        <div className="h-160 w-7/8 m-20 p-2">

            <div className="w-160 h-35 border-2 shadow-lg bg-[#F0F0F0] text-2xl rounded-2xl">

                <h3 className="mt-5 text-7xl ml-45 font-bold">Monday</h3>
                <p className='ml-30 font-medium text-[#2C84AC] '>Monday  6-8pm (Beginner sessions)</p>
            </div>

            <div className="w-160 h-35 border-2 mt-15 shadow-lg bg-[#F0F0F0]  text-2xl rounded-2xl">

                   <h3 className="mt-5 text-7xl ml-45 font-bold">Tuesday</h3>
                <p className='ml-40 font-medium text-[#2C84AC] '>Training session 5-8pm</p>
            </div>

            <div className="w-160 h-35 border-2 bg-[#F0F0F0] shadow-lg mt-15 text-2xl rounded-2xl ">


                   <h3 className="mt-5 text-7xl ml-45 font-bold">Thursday</h3>
                <p className='ml-40 font-medium text-[#2C84AC]'>Training and core session  5-9pm</p>
            </div>

        </div>

        </FadeInOnScroll>
        </div>

</div>




<div className=" block absolute w-[100%] top-520 md:hidden mt-40 h-180  text-[#363636] ">
      <hr className="mt-30" />
      <FadeInOnScroll>
       <div className=" center text-center mt-7">
        <h2 className="text-[550%] leading-20 w-full mt-30 text-[#363636] font-bold">Training<span className="text-[#E37345] "> sessions</span></h2>
        <p className=" justify-self-center w-7/8 text-3xl  mt-5 text-[120%]  ">We hold training sessions 2-3x times a week. Our sessions are come as you go meaning you can come in and climb as much as you want without having book a slot.
            <br/> <span className='font-bold'>Here are our times: </span></p>

        </div>
        <div className="h-160   w-[100%] mt-20 ">

            <div className="w-[95%] grid place-items-center h-30 border-2 shadow-lg bg-[#F0F0F0] text-2xl rounded-2xl">

                <h3 className=" text-[260%] text-center  font-bold">Monday</h3>
                <p className='ml- font-medium text-center text-[#2C84AC] '> 6-8PM (Beginner sessions)</p>
            </div>

            <div className="h-160 w-[100%] mt-10  ">

            <div className="w-[95%] grid place-items-center h-30 border-2 shadow-lg bg-[#F0F0F0] text-2xl rounded-2xl">

                <h3 className=" text-[260%] text-center   font-bold">Tuesday</h3>
                <p className='ml- font-medium text-3xl text-center text-[#2C84AC] '>  5-8PM</p>
            </div>
 <div className="h-160 w-[100%] mt-10  ">

            <div className="w-[95%]   grid place-items-center h-30 border-2 shadow-lg bg-[#F0F0F0] text-2xl rounded-2xl">

                <h3 className=" text-[260%] text-center font-bold">Thursday</h3>
             <p className=' py- font-medium text-3xl text-center text-[#2C84AC] '>  5-9PM</p>
            </div>
            </div>
</div>
        </div>
       </FadeInOnScroll>

</div>

  
    </>
  )
}

export default Training
