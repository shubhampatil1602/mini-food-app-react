import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Hero = () => {
  const imgData = [
    {
      url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg',
    },
    {
      url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg',
    },
    {
      url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
    },
  ];

  const [currentImg, setCurrentImg] = useState(0);

  const handleLeft = () => {
    if (currentImg === imgData.length - 1) setCurrentImg(0);
    else setCurrentImg(currentImg + 1);
  };
  const handleRight = () => {
    if (currentImg === 0) setCurrentImg(imgData.length - 1);
    else setCurrentImg(currentImg - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleRight();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentImg]);

  return (
    <>
      <div className='relative'>
        <FaChevronLeft
          className='absolute z-10 rounded-s sm:top-0 sm:left-[3.8rem] sm:h-full w-24 sm:pl-12 top-32 p-2 text-white cursor-pointer hover:bg-opacity-75'
          size={50}
          onClick={handleLeft}
        />
        <FaChevronRight
          className='absolute z-10 rounded-s right-0 sm:top-0 sm:right-[3.8rem] sm:h-full w-24 sm:pr-12 top-32 p-2 text-white cursor-pointer hover:bg-opacity-75'
          size={50}
          onClick={handleRight}
        />
        <div className='my-4 m-auto w-11/12 sm:h-[600px] h-[300px]'>
          <div className='absolute right-0 left-0 w-11/12 mx-auto h-full rounded bg-black opacity-25'></div>
          <img
            className='w-full h-full object-cover rounded shadow-xl'
            src={imgData[currentImg].url}
            alt='image'
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
