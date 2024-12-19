import React from 'react'


function Footer() {
  return (
  <div className='Footer bg-black p-5 container mx-auto max-w-full mt-20 flex justify-around top-0' >
    <div className='lg:me-96'>
        <p className='text-white font-semibold text-sm lg:text-lg'>@Designed and Developed by Fawaz </p>
    </div>

    <div className='flex  '>
    <a href="https://github.com/MohamedFawaz14" >
    <i class="fa-brands fa-2xl fa-github me-5 cursor-pointer" style={{color:"#ffffff",}}></i>
    </a>
    
    <a href='https://wa.me/+918610198693?text = Hi Fawaz !!'>
    <i class="fa-brands fa-2xl fa-square-whatsapp cursor-pointer me-5" style={{color:"#ffffff"}}></i>
    </a>
    
    <a href='https://www.linkedin.com/in/mohamed-fawaz-2ba606254'>
    <i class="fa-brands fa-linkedin fa-2xl cursor-pointer" style={{color:"#ffffff"}}></i>
    </a>
    
    </div>
  </div>
  )
}

export default Footer;