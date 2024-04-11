import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FoodDataContext } from '../utils/context';
import { useContext } from 'react';

const TopPicks = () => {
  const {
    menu: { topPicks },
    addToCart,
  } = useContext(FoodDataContext);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className='w-11/12 mx-auto slider-container mt-28 mb-20'>
        <div className='p-6 my-8 md:pl-[40px]'>
          <h1 className='text-3xl md:text-4xl font-bold'>
            What's on you mind?{' '}
          </h1>
        </div>
        <Slider {...settings}>
          {topPicks.map((item) => (
            <div
              className='flex flex-col justify-center items-center'
              key={item.id}
            >
              <div className='w-48 h-48 mx-auto mb-4'>
                <img
                  className='rounded-full h-full w-full object-cover shadow-lg'
                  src={item.image}
                  alt={item.foodname}
                />
              </div>
              <div className='flex justify-center items-center flex-col gap-1 mb-9'>
                <p className='text-lg font-semibold'>{item.foodname}</p>
                <button
                  onClick={() => addToCart(item.id)}
                  className='bg-red-500 hover:opacity-75 rounded text-white p-2'
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default TopPicks;
