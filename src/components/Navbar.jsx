import { IoCart } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import { useContext, useState } from 'react';
import { FoodDataContext } from '../utils/context';

const Navbar = () => {
  const [sideNav, setSideNav] = useState(false);
  const { cartMenu } = useContext(FoodDataContext);
  const toggleNav = () => {
    setSideNav(!sideNav);
  };

  return (
    <nav className='fixed z-30 w-full bg-white top-0'>
      <div className='shadow-lg w-full flex items-center justify-around h-20 relative'>
        <div className='w-1/3'>
          <Link
            to='/'
            className='font-bold text-2xl cursor-pointer text-orange-400'
          >
            Food App
          </Link>
        </div>
        <div className='absolute w-1/3'>
          <ul className='hidden md:flex justify-center items-center gap-x-8 '>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/offerings'>Offerings</Link>
            <Link to='/signin'>Sign in</Link>
          </ul>
        </div>

        {sideNav && (
          <div className='z-20 absolute top-0 right-0 h-screen w-[350px]'>
            <RxCross2
              onClick={toggleNav}
              size={30}
              className='absolute right-4 top-4 cursor-pointer'
            />
            <ul className='h-full flex flex-col justify-center items-center gap-x-4 bg-orange-50'>
              <Link
                className='w-full p-4 text-center text-3xl font-semibold hover:text-orange-400 transition duration-300 ease-in-out'
                to='/'
                onClick={toggleNav}
              >
                Home
              </Link>
              <Link
                className='w-full p-4 text-center text-3xl font-semibold hover:text-orange-400 transition duration-300 ease-in-out'
                to='/about'
                onClick={toggleNav}
              >
                About
              </Link>
              <Link
                className='w-full p-4 text-center text-3xl font-semibold hover:text-orange-400 transition duration-300 ease-in-out'
                to='/offerings'
                onClick={toggleNav}
              >
                Offerings
              </Link>
              <Link
                className='w-full p-4 text-center text-3xl font-semibold hover:text-orange-400 transition duration-300 ease-in-out'
                to='/signin'
                onClick={toggleNav}
              >
                Sign in
              </Link>
            </ul>
          </div>
        )}

        <div className='flex justify-end gap-x-5 w-1/3'>
          <Link to='/cart' className='flex items-center gap-x-1'>
            <IoCart size={25} />
            {cartMenu.length}
            {/* {cartMenu.map((menu) => menu.quantity).reduce((a, b) => a + b, 0)} */}
          </Link>
          <GiHamburgerMenu
            onClick={toggleNav}
            size={25}
            className='md:hidden cursor-pointer'
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
