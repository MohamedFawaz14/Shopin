import React,{useState} from 'react';

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

function Carousel() {
  const slides = [
    {
      image :"Banner/samsungS24Bannere.jpg",
    },
    {
      image :"Banner/rolexBanner.jpg",
    },
    {
       image:'Banner/aleenwaverBanner.jpg',
    },
    {
      image :"Banner/iPhone 15ProMAxBanner.jpg",
    },

    {
      image :"Banner/iPhone15Banner.jpg",
    },
    {
      image :"Banner/MacBookProBanner.jpg",
    },
    
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  

  return (
    <div className='max-w-[1400px] h-[480px] w-full m-auto py-8 px-4 relative '>
      <div
        
       
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      > <img style={{height:"400px",width:"1400px"}} 
      className=' rounded-3xl'
      src ={slides[currentIndex].image} alt='carousel-logo'></img></div>
      {/* Left Arrow */}
      <div className='block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      
    </div>
  );
}

export default Carousel;