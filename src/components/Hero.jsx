import { useState } from 'react'

import ala from './images/alaskarange.jpg'
function Navbar() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className='hidden md:flex'>
       <div className="h-10 border- ">
        <img src={ala} alt="" className="blur-[3px] absolute w-full h-200" />
            <div className="bg-black opacity-20 absolute w-full h-200"></div>
            <div className=" absolute flex mt-30">
                <div className=" ml-5 mt-5">
                <div className=''>
                   <h1 className="text-[120px] ml-37 mt-20 text-[#E37345] leading-30 justify-self-center  bamber-300  w-280 text-center font-bold">  DCU <span className="text-[120px] w-130 font-bold text-[#F0F0F0]  ">rock climbing</span> club</h1>
               
                    <h2 className='text-3xl text-center ml-20 text-[#F0F0F0] mt-3  w-full'> Reaching new </h2>
                    <h2 className='text-3xl text-center ml-20 text-[#F0F0F0] mt-3 w-full'> heights since 19?? </h2>



                   <button className="mt-20 hover:text-[#F0F0F0] hover:bg-[#2C84AC]  -  w-50 h-14 text-4xl text-[#2C84AC] ml-155 font-bld rounded-lg bg-[#F0F0F0]  transform transition-all duration-300 hover:scale-105  hover:shadow-2xl hover:transform-y-1 hover:opacity-90"><a href='https://dcuclubsandsocs.ie/club/rock-climbing'> Join now</a></button>
                </div>
                </div>





                   
                        
                    
            </div>
       </div>
       </div>


         <div className=" block md:hidden ">

<div className="  ">
    
    <img src={ala} alt="" className=" absolute w-500 h-160" />
    <div className='bg-black absolute h-160 w-[500px] opacity-25'></div>
    
    <div className="absolute text-[90px] text-[#f0f0f0] leading-25 pt-30 text-center font-bold">DCU <span className="text-[#e37e45]">rock climbing </span> club</div>
          <h2 className='absolute text-3xl text-center ml-2 text-[#F0F0F0] pt-110  w-[490px]'> Reaching new </h2>
                <h2 className='absolute text-3xl text-center ml-5 text-[#F0F0F0] mt-120 w-[480px]'> heights since 19?? </h2>
                  <button className=" absolute mt-135 hover:text-[#F0F0F0] hover:bg-[#2C84AC]    w-50 h-14 text-4xl text-[#2C84AC] ml-40 font-bld rounded-lg bg-[#F0F0F0]  transform transition-all duration-300 hover:scale-105  hover:shadow-2xl hover:transform-y-1 hover:opacity-90"><a href='https://dcuclubsandsocs.ie/club/rock-climbing'> Join now</a></button>

</div>
    </div>
    </>
  )
}

export default Navbar
