import { useState } from 'react'

import logo from './images/logo.png'
import 'flowbite';


function Navbar() {
  const [count, setCount] = useState(0)

  return (
    <>
     <nav className=" hidden md:flex  fixed w-4/5 mt-1 rounded-lg h-15 z-50 text-[#2C84AC] text-2xl left-37 bg-[#F0F0F0]">
     <img src={logo} alt="logo" className=" ml-20" />
     
                          <ul className="flex pb-2 font-mediu">
                        <li className="mt-3">

                            <a href="#" className="hover:text-gray-400 ml-10 md:ml-30">Home</a>
                        </li>

                        <li className=" md:ml-15 ml-10 mt-3 w-20">

                               <a href="#" className="hover:text-gray-400">Committee</a>
                        </li>

                        <li className=" md:ml-20 ml-3 mt-3 w-20 ">

                               <a href="#" className="hover:text-gray-400">Merch</a>
                        </li>

                        <li className=" md:ml-10 ml-10 mt-3 w-20 ">

                              <a href="#"  className="hover:text-gray-400">Gallery</a>
                        </li>
                            

                    </ul>
                    
                    <button className="bg-[#2C84AC] text-[#F0F0F0] h-10 mt-2.5 w-35 ml-20 rounded-lg border-1"> <a href='https://dcuclubsandsocs.ie/club/rock-climbing'> Join Now</a></button>

            </nav>



      <div className="block fixed z-50 md:hidden w-[500px] bg-[#F0F0F0] w-full">
        

<nav class="border">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={logo} class="h-15" alt="Flowbite Logo" />
        <span class=" ml-5 justify-self-center text-3xl text-[#2C84AC]">DCU rock climbing </span>
    </a>
    <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 ">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border- rounded-lg bg-[#363636] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
       <li>
          <a href="#" class="block py-2 mb-0.5 px-3   hover:bg-gray-100 bg-[#2C84AC] hover:text-[#2C84AC]  text-[#F0F0F0]">Home</a>
        </li>

       <li>
          <a href="#" class="block py-2 mb-0.5 px-3   hover:bg-gray-100 bg-[#2C84AC] hover:text-[#2C84AC]  text-[#F0F0F0]">Committee</a>
        </li>
         <li>
          <a href="#" class="block py-2 mb-0.5 px-3   hover:bg-gray-100 bg-[#2C84AC] hover:text-[#2C84AC]  text-[#F0F0F0]">Merch</a>
        </li>
          <li>
          <a href="#" class="block py-2 mb-0.5 px-3   hover:bg-gray-100 bg-[#2C84AC] hover:text-[#2C84AC]  text-[#F0F0F0]">Gallery</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

      </div>
    </>
  )
}

export default Navbar
