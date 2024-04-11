import { useContext } from 'react';
import { FoodDataContext } from '../utils/context';

const Cart = () => {
  const {
    menu: { topPicks },
    cartMenu,
    addToCart,
    removeOneQantity,
    removeItem,
  } = useContext(FoodDataContext);

  return (
    <div className='mb-10 mt-28'>
      <div className='text-center font-bold text-3xl p-4 mb-4'>
        Your Shopping Cart
      </div>
      <div className='w-3/4 mx-auto flex flex-wrap flex-col-reverse md:flex-row gap-2'>
        <div className='md:w-2/3 md:block w-fit flex flex-wrap gap-3 justify-center mx-auto'>
          {cartMenu.map((menu) => (
            <div
              key={menu.id}
              className='border rounded flex flex-col md:flex-row md:mb-[12px] justify-between items-center'
            >
              <div className='w-[250px]'>
                <img
                  src={menu.image}
                  alt={menu.foodname}
                  className='w-full h-44 rounded'
                />
              </div>
              <div className='flex flex-col w-full md:w-fit text-center pt-3'>
                <p className='font-bold text-xl mb-3 hidden md:block'>
                  Description:{' '}
                </p>
                <h1 className='text-xl font-semibold'>{menu.foodname}</h1>
                <h2 className='text-xl font-semibold'>₹{menu.price}</h2>
                <p className='mt-3 text-lg font-bold'>
                  Quantity {menu.quantity}
                </p>
              </div>
              <div className='flex flex-row gap-3 mr-3 my-3'>
                <button
                  onClick={() => addToCart(menu.id)}
                  className='p-2 px-4 text-xl font-bold rounded-full bg-orange-400 text-white'
                >
                  +
                </button>
                <button
                  onClick={() => removeOneQantity(menu.id)}
                  className='p-2 px-4 text-xl font-bold rounded-full bg-blue-400 text-white'
                >
                  -
                </button>
                <button
                  onClick={() => removeItem(menu.id)}
                  className='p-2 px-4 text-xl font-bold rounded-full bg-red-500 text-white'
                >
                  x
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className='md:w-[359px] w-full border rounded'>
          <div className='p-4'>
            <h1 className='font-bold text-2xl text-center'>Total Summay</h1>
          </div>
          <div className='flex flex-col w-10/12 mx-auto gap-y-2'>
            {cartMenu.map((c) => (
              <>
                <div key={c.id} className='flex gap-3 justify-between'>
                  <p>
                    {c.quantity} x {c.foodname}
                  </p>
                  <p>₹{c.price * c.quantity}</p>
                </div>
              </>
            ))}
            <div className='flex justify-between border-t py-4 font-bold text-xl'>
              <p>Total</p>
              <p>
                ₹
                {cartMenu
                  .map((menu) => menu.price * menu.quantity)
                  .reduce((a, b) => a + b, 0)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
