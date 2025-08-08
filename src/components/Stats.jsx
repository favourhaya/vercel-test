import { useState } from 'react'

import FadeInOnScroll from './Fadein'
function Stats() {
  const [count, setCount] = useState(0)

  return (
    <>
       <FadeInOnScroll>
<div className="hidden md:block mt-210   h-100">

        <h2 className="text-8xl text-[#363636] justify-self-center font-bold pt- ">Our <span className="text-[#E37345]">Stats</span> </h2>

   
        <div className=" flex  pl-15 space-x-10 pt-15 h-60">
            <div className="ml-40 w-70 h- g-amber-200">
                <div className=" h-2/3 text-8xl p-10 font-bold text-[#363636]">200+</div>
                <p className="text-4xl mt-7 font-b w-90 text-[#2C84AC] ">Current members</p>
            </div>

             <div className="ml-20 w-70 h- g-amber-200">
                 <div className=" h-2/3 text-8xl p-10 pl-17 font-bold text-[#363636]">30+</div>
                <p className="text-4xl mt-7 font- w-90 text-[#2C84AC] ">Years since created</p>
            </div>
                
            <div className="ml-20 w-70 h- g-amber-200">
                 <div className=" h-2/3 text-8xl pl-5 p-10 font-bold text-[#363636]">1000+</div>
                <p className="text-4xl mt-7 font- w-90 text-[#2C84AC] ">Instagram followers</p>
            </div>
        </div>

     </div>



     <div className=" block  md:hidden ">

        <div className="absolute  w-[480px]  top-175">

        <h2 className="text-8xl text-center  text-[#363636] font-bold pt-15 ">Our <span className="text-[#E37345]">Stats</span> </h2>
        <div className=" flex">
            <div className="pl-0 b">
                <h1 className="pl-9  font-bold mt-10 text-6xl text-[#363636]">200</h1>
                <p className="text-3xl pl-3 text-center text-[#2C84AC]">Current members</p>
            </div>

            <div className="w-px h-35 border-1 mt-10 ml-2"></div>

             <div className="pl-3">
                <h1 className="pl-7 font-bold mt-10 text-6xl text-[#363636]">30</h1>
                <p className="text-3xl pl-1 text-center text-[#2C84AC]">Years running</p>
            </div>

             <div className="w-px h-35 border-1 mt-10 ml-5"></div>

             <div className="pl-0 ">
                <h1 className="pl-5 font-bold mt-10 text-6xl text-[#363636]">1200</h1>
                <p className="text-3xl pl-2 text-center text-[#2C84AC]">Instagram followers</p>
            </div>



        </div>

</div>
     </div>
      </FadeInOnScroll>
    </>
  )
}

export default Stats
