import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const About = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get('https://api.github.com/users/shubhampatil1602').then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className='py-12 h-[80vh] mt-28'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h1 className='text-4xl font-bold text-center mb-8'>About Us</h1>
        <div className='flex flex-col items-center justify-center'>
          <div className='mb-8'>
            <img
              src={data.avatar_url}
              alt={data.name}
              className='rounded-full h-40 w-40 object-cover shadow-xl'
            />
          </div>
          <div className='text-center'>
            <p className='text-lg text-gray-600'>{data.location} 🇮🇳</p>
            <h1 className='text-3xl p-3 font-bold text-gray-800'>
              {data.name}
            </h1>
            <a
              href='https://github.com/shubhampatil1602'
              target='_blank'
              className='text-lg text-gray-600 flex justify-center items-center p-1 gap-2'
            >
              <FaGithub className='text-black' /> @{data.login}
            </a>
            {data.twitter_username && (
              <a
                href='https://twitter.com/shubhamsp1602'
                target='_blank'
                className='text-lg text-gray-600 flex justify-center items-center p-1 gap-2'
              >
                <FaTwitter className='text-blue-400' /> @{data.twitter_username}
              </a>
            )}
            <a
              href='https://www.linkedin.com/in/shubhmpatil/'
              className='
              text-lg
              text-gray-600
              flex
              justify-center
              items-center
              p-1
              gap-2'
            >
              <FaLinkedin className='text-blue-600' /> @shubhmpatil
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
