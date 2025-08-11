import { useState } from 'react'


import climb from './images/climber.png'
import arm from './images/Arm.png'
import communtity from './images/community.png'

import FadeInOnScroll from './Fadein'

function Whyjoin() {
  const [count, setCount] = useState(0)

  return ( 
    <>
    
<div className=" text-[#363636] hidden md:block">
<hr className='mt-40'/>

<FadeInOnScroll>
        <h2 className=" absolute  mt- text-8xl justify-self-center  text-[#363636] font-bold pt-20 ">Why <span className="text-[#E37345]">Join ?</span> </h2>
       </FadeInOnScroll>

        <div className="absolute   top-225">
        <div className="absolute  left-50 rounded-2xl w-75 h-90 mt-15 bg-[#F0F0F0] top-575">
             <FadeInOnScroll>
            <div className="   ">
                
                 <img src={climb} alt="" className="w-7/8 justify-self-center  mt-5 h-50" />
               <h4 className="text-3xl text-center text-[#2C84AC]">Challange yourself</h4>
               <p className="text-center mt-2">asdfaoisufdiuazsgej\fwgfasadkjas
                bfiuabnsunefnaynwiebgcqfauwfygqbui
                jkcbjfkhknausjgbnicgbui qncu </p>
            </div>
            </FadeInOnScroll>

        </div>

             
         <div className="absolute left-140 bg-[#F0F0F0] mt-15 rounded-2xl w-75 h-90 top-575">
            <FadeInOnScroll>
             <div className="mb-2  ">
                
              <img src={arm} alt="" className=" w-5/8 justify-self-center mt-5 h-40" />
               <h4 className="text-3xl pt-9 text-[#2C84AC] text-center">Stay fit</h4>
               <p className="text-center mt-2">asdfaoisufdiuazsgej\fwgfasadkjas
                bfiuabnsunefnaynwiebgcqfauwfygqbui
                jkcbjfkhknausjgbnicgbui qncu </p>
            </div>
             </FadeInOnScroll>


         </div>

         <div className="absolute left-230  bg-[#F0F0F0] mt-15 rounded-2xl w-75 h-90 top-575">
             <div className="mt-4  ">
                <FadeInOnScroll>
                

               <img src={communtity} alt="" className=" w-5/8 justify-self-center   h-50" />
               <h4 className="text-3xl pt- text-[#2C84AC] text-center">Amazing community</h4>
               <p className="text-center ">asdfaoisufdiuazsgej\fwgfasadkjas
                bfiuabnsunefnaynwiebgcqfauwfygqbui
                jkcbjfkhknausjgbnicgbui qncu </p>
                   </FadeInOnScroll>
            </div>
         

         </div>

        
        <hr className="" />
     </div>
     </div>



    <div className=" absolute  top-850 block h-150 md:hidden justify-items-center w-[100%] text-[#363636]">
        <hr className="w-[100%]" />
        <h2 className="text-[470%] w-[100%] text-center font-bold mt-25">Why <span className="text-[#E37345]">Join?</span></h2>

          <div className="w-[100%] justify-items-center">
          <img src={climb} alt="" className="w-[75%]   mt-10 h-60" />
       </div>
        <div className="text-[#2C84AC] text-center text-4xl w-[100%]">challange yourself</div>
        <p className="text-center  w-[100%]">asdfaoisufdiuazsgej\fwgfasadkjas bfiuabnsunefnaynwiebgcqfauwfygqbui jkcbjfkhknausjgbnicgbui qncu</p>

        <div className="w-[100%] justify-items-center">
        <img src={arm} alt="" className="w-[50%] mt-10 h-45" />
       </div>
        <div className="text-[#2C84AC] text-center w-[100%] text-4xl">Stay fit</div>
        <p className="text-center w-[100%]">asdfaoisufdiuazsgej\fwgfasadkjas bfiuabnsunefnaynwiebgcqfauwfygqbui jkcbjfkhknausjgbnicgbui qncu</p>

        <div className="w-[100%] justify-items-center">
        <img src={communtity} alt="" className="w-[50%]  mt-10 h-50" />
        </div>
        <div className="text-[#2C84AC] text-center w-[100%]  text-4xl">Amazing community</div>
        <p className="text-center w-[100%]">asdfaoisufdiuazsgej\fwgfasadkjas bfiuabnsunefnaynwiebgcqfauwfygqbui jkcbjfkhknausjgbnicgbui qncu</p>
    </div>
    </>
  )
}

export default Whyjoin
