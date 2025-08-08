import { useState } from 'react'

import FadeInOnScroll from './Fadein'
function AboutUs() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='hidden md:block'>
        <hr className="" />
    <div className="h-180  ">
       

          

        <div className="flex">

            <section className="absolute left-25 top-380 h-110 w-200 bg-white border-2"> </section>
                
            <section className="absolute left-250 top-365">
                 <FadeInOnScroll>
                <h2 className="text-8xl w-120  text-[#363636] font-bold ml-">About <span className="text-[#E37E45]">Us</span></h2>

                <div className="  rounded-2xl h-108 w-110 ">

                    <p className="text-3xl  w-130 pl- font-bod  text-[#363636]  p-4 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 

                        <br/>
<br/>

eiusmod tempor incididunt ut labore 

et dolore magna aliqua. Ut enim ad minim veniam, 
<br/>
<br/>

quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa.

                    </p>
                    <button className="mt-5 w-80 h-12.5  text-[#F0F0F0] font-bld rounded-lg ml-20 bg-[#2C84AC] text-3xl transform transition-all duration-300 hover:scale-105  hover:shadow-2xl hover:transform-y-1 hover:opacity-90 hover:bg-[#F0F0F0] hover:text-[#2C84AC]"> <a href="#" className="">Meet the committee</a></button>
                </div>

            </FadeInOnScroll>
            </section>

        </div>
    

    </div>
    </div>


    <div className="block  justify-items-center center md:hidden">
        
        <div className="absolute top-300 text-center  text-[#363636] w-[480px] ">
            <hr className="" />
        <h1 className="text-8xl mt-20 font-bold">About <span className="text-[#e37e45]">us</span></h1>

        
<div className="h-80 mt-5  m-10 bg-white"></div>
        <p className="text-2xl mt-5 p-3  font-">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do

 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 


<br/>
<br/>

eiusmod tempor incididunt ut labore 

et dolore magna aliqua. Ut enim ad minim veniam, 
<br/>
<br/>

quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa.
</p>

   <button className="mt-5 w-80 h-12.5  text-[#F0F0F0] font-bld rounded-lg justify-self-center bg-[#2C84AC] text-3xl transform transition-all duration-300 hover:scale-105  hover:shadow-2xl hover:transform-y-1 hover:opacity-90"> <a href="#" className="">Meet the committee</a></button>

        </div>



    </div>
   
   </>
  )
}

export default AboutUs
