const Delivery = () => {
  return (
    <div className='my-10'>
      <div className='p-6 my-4 border'>
        <h1 className='text-3xl md:text-4xl text-orange-500 font-bold text-center'>
          Basic React Food App
        </h1>
      </div>
      <div className='md:h-[600px] flex flex-col md:flex-row justify-center items-center gap-y-6'>
        <div className='h-full w-2/3'>
          <img
            className='h-full object-contain w-full'
            src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp'
          />
        </div>
        <div className='flex flex-col justify-center items-start gap-y-6 md:w-2/6 w-3/5'>
          <h1 className='text-3xl font-bold text-green-500'>Get the app</h1>
          <p className='text-4xl font-semibold md:w-2/3'>
            The fastest way to order food online
          </p>
          <button className='bg-black hover:opacity-70 font-bold rounded text-white p-2'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
