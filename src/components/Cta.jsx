import { useState } from 'react'
import FadeInOnScroll from './Fadein'

function Cta() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FadeInOnScroll>

    <footer className="hidden md:block bg-[#363636] text-[#F0F0F0] py-25 mt-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Side */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h1 className="text-xl font-bold">DCU Rock Climbing Club</h1>
          <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Right Side */}
        
      </div>
    </footer>




     <footer className="block w-[100%]  absolute top-1650 md:hidden bg-[#363636] text-[#F0F0F0] py-15 mt-20">
      <div className=" px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Side */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h1 className="text-xl font-bold">DCU Rock Climbing Club</h1>
          <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Right Side */}
        
      </div>
    </footer>
</FadeInOnScroll>



    </>
    
  )
}

export default Cta
