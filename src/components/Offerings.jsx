import { useContext } from 'react';
import { FoodDataContext } from '../utils/context';

const Offerings = () => {
  const {
    menu: { foods },
    addToCart,
  } = useContext(FoodDataContext);
  return (
    <div className='mb-10 mt-28'>
      <h1 className='text-3xl font-bold text-center my-10'>
        More Food Offerings
      </h1>
      <div className='flex justify-center gap-5 flex-wrap '>
        {foods.map((food) => {
          return (
            <div key={food.id} className='flex flex-col border rounded'>
              <div className='w-[300px] h-[200px]'>
                <img
                  className='w-full h-full object-cover rounded'
                  src={food.image}
                  alt={food.foodname}
                />
              </div>
              <h1 className='text-xl font-bold px-3 py-1 pt-2'>
                {food.foodname}
              </h1>
              <h1 className='p-2'>₹ {food.price}</h1>
              <button
                onClick={() => addToCart(food.id)}
                className='bg-red-500 hover:opacity-80 rounded cursor-pointer p-3 text-white'
              >
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Offerings;
