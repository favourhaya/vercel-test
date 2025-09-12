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
                
            <section className="absolute left-250 top-350">
                 <FadeInOnScroll>
                <h2 className="text-8xl w-120 ml-[10%] text-[#363636] font-bold ml-">About <span className="text-[#E37E45]">Us</span></h2>

                <div className="  rounded-2xl h-108 w-110 ">

                    <p className="text-2xl  w-130 pl- font-bod  text-[#363636]  p-4 ">
                        The DCU Rock Climbing Club is a welcoming community for climbers of all levels, from complete beginners to experienced adventurers.
<br/>
<br/>

We train indoors in our hall in dcu, focusing on skill, safety, and teamwork, while also running trips, events, and socials throughout the year. 

                        <br/>
<br/>
<br/>


Whether you’re looking for a new challenge or just a fun way to meet people, come climb with us!
                    </p>
                    <button className="mt-5 w-80 h-12.5  text-[#F0F0F0] font-bld rounded-lg ml-20 bg-[#2C84AC] text-3xl transform transition-all duration-300 hover:scale-105  hover:shadow-2xl hover:transform-y-1 hover:opacity-90 hover:bg-[#F0F0F0] hover:text-[#2C84AC]"> <a href="#" className="">Meet the committee</a></button>
                </div>

            </FadeInOnScroll>
            </section>

        </div>
    

    </div>
    </div>


    <div className="block  justify-items-center center md:hidden">
        
        <div className="absolute top-300 text-center  text-[#363636] w-[100%] ">
            <hr className="" />
         <FadeInOnScroll>
        <h1 className="text-[550%] leading-20 w-full mt-20 font-bold">About <span className="text-[#e37e45]">us</span></h1>

        
<div className="h-80 mt-5  m-10 bg-white"></div>
        <p className="text-2xl mt-5 p-3  font-">DCU Rock Climbing Club is a welcoming community for climbers of all levels, from complete beginners to experienced adventurers.
<br/>
<br/>

We train indoors in our hall in dcu, focusing on skill, safety, and teamwork, while also running trips, events, and socials throughout the year. 

                        <br/>
<br/>
<br/>


Whether you’re looking for a new challenge or just a fun way to meet people, come climb with us!
</p>

   <button className="mt-5 w-[80%] h-15  text-[#F0F0F0] font-bold rounded-lg justify-self-center bg-[#2C84AC] text-3xl  transform transition-all duration-300 hover:scale-105  hover:shadow-2xl hover:transform-y-1 hover:opacity-90 hover:bg-[#F0F0F0] hover:text-[#2C84AC]"> <a href="#" className="">Meet the committee</a></button>
</FadeInOnScroll>

        </div>


   
    </div>
   
   </>
  )
}

export default AboutUs
