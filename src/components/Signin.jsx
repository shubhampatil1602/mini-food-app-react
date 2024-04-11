import React, { useState } from 'react';

const Signin = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const copyErrors = {};

    if (formData.name.length < 2) {
      copyErrors.name = 'Name is required';
    } else if (formData.name.length > 2) {
      copyErrors.name = '';
    }
    if (formData.email.length < 2) {
      copyErrors.email = 'Email is required';
    }
    if (!formData.phone.length) {
      copyErrors.phone = 'Phone is required';
    } else if (isNaN(formData.phone)) {
      copyErrors.phone = 'Phone must be a number';
    } else if (formData.phone.length < 10 || formData.phone.length > 10) {
      copyErrors.phone = 'Phone must be 10 digits';
    }
    if (!formData.password.length) {
      copyErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      copyErrors.password = 'Password must be 8 characters';
    }
    if (!formData.confirmPassword.length) {
      copyErrors.confirmPassword = 'Confirm Password is required';
    } else if (formData.confirmPassword.length < 8) {
      copyErrors.confirmPassword = 'Password must be 8 characters';
    } else if (formData.password !== formData.confirmPassword) {
      copyErrors.confirmPassword = 'Passwords does not matched';
    }

    setErrors(copyErrors);

    setFlag(true);
  };

  return (
    <div className='sm:h-screen flex flex-wrap justify-center items-center my-10 md:mb-0'>
      <div className='md:w-2/4 flex justify-center items-center md:items-start gap-4 p-24 flex-col'>
        <h1 className='text-3xl font-bold'>Get started with your account.</h1>
        <p className='text-md'>
          Find your favourite food on our platform. Just one step to order your
          food
        </p>
      </div>
      <div className='flex flex-col justify-center items-center md:w-2/4'>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-2 border bg-slate-50 p-10 rounded'>
            <h1 className='text-2xl font-bold mb-4'>Sign in</h1>
            <input
              type='text'
              className='outline-none border p-2 rounded w-[350px]'
              placeholder='Name'
              value={formData.name}
              name='name'
              onChange={handleChange}
            />
            <p className='text-red-500'>{errors.name}</p>

            <input
              type='text'
              className='outline-none border p-2 rounded w-[350px]'
              placeholder='Email'
              value={formData.email}
              name='email'
              onChange={handleChange}
            />
            <p className='text-red-500'>{errors.email}</p>

            <input
              type='text'
              className='outline-none border p-2 rounded w-[350px]'
              placeholder='Phone'
              value={formData.phone}
              name='phone'
              onChange={handleChange}
            />
            <p className='text-red-500'>{errors.phone}</p>

            <input
              type='text'
              className='outline-none border p-2 rounded w-[350px]'
              placeholder='Password'
              value={formData.password}
              name='password'
              onChange={handleChange}
            />
            <p className='text-red-500'>{errors.password}</p>

            <input
              type='text'
              className='outline-none border p-2 rounded w-[350px]'
              placeholder='Confirm Password'
              value={formData.confirmPassword}
              name='confirmPassword'
              onChange={handleChange}
            />
            <p className='text-red-500'>{errors.confirmPassword}</p>
            <button className='bg-blue-500 text-white p-2 rounded'>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
