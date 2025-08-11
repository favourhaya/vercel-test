import { useState } from 'react'

import FadeInOnScroll from './Fadein'

function Training() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FadeInOnScroll>

<div className=" hidden md:block mt-40 h-180  text-[#363636] ">
    <hr className="" />

        <div className='flex'>

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
        <div className="mr-85 mt-7">
        <h2 className="text-[165px] leading-40 mt-12 text-[#363636] font-bold">Training<span className="text-[#E37345] "> sessions</span></h2>
        <p className=" justify-self-center mt-5 text-2xl text-center w-150 ">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>

        </div>
        </div>

</div>




<div className=" block absolute w-[100%] top-520 md:hidden mt-40 h-180  text-[#363636] ">
      <hr className="mt-30" />
       <div className=" center text-center mt-7">
        <h2 className="text-[550%] leading-20 w-full mt-30 text-[#363636] font-bold">Training<span className="text-[#E37345] "> sessions</span></h2>
        <p className=" justify-self-center mt-5 text-[100%]  ">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>

        </div>
        <div className="h-160  w-[100%] mt-20 ">

            <div className="w-[95%] justify-self-center h-30 border-2 shadow-lg bg-[#F0F0F0] text-2xl rounded-2xl">

                <h3 className=" text-[260%] text-center  font-bold">Monday</h3>
                <p className='ml- font-medium text-center text-[#2C84AC] '> 6-8pm (Beginner sessions)</p>
            </div>

            <div className="h-160 w-[100%] mt-10  ">

            <div className="w-[95%] justify-self-center h-30 border-2 shadow-lg bg-[#F0F0F0] text-2xl rounded-2xl">

                <h3 className=" text-[260%] text-center   font-bold">Tuesday</h3>
                <p className='ml- font-medium text-3xl text-center text-[#2C84AC] '>  5-8pm</p>
            </div>
 <div className="h-160 w-[100%] mt-10  ">

            <div className="w-[95%] justify-self-center h-30 border-2 shadow-lg bg-[#F0F0F0] text-2xl rounded-2xl">

                <h3 className=" text-[260%] text-center font-bold">Thursday</h3>
             <p className='ml- font-medium text-3xl text-center text-[#2C84AC] '>  5-9pm</p>
            </div>
            </div>
</div>
        </div>
       

</div>
</FadeInOnScroll>
  
    </>
  )
}

export default Training
