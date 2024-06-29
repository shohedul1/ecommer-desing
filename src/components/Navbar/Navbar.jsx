

import React, { useEffect, useState } from 'react';
import Logo from "../../assets/Logo1.png";
import { MdSearch } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode';
import { FaCaretDown } from "react-icons/fa";


const Menu = [
  {
    id: 1,
    name: 'Home',
    link: "/#"
  },
  {
    id: 2,
    name: 'Top Rated',
    link: "/#services"
  },
  {
    id: 3,
    name: 'Kind Wear',
    link: "/#"
  },
  {
    id: 4,
    name: 'Mens Wear',
    link: "/#"
  },
  {
    id: 5,
    name: 'Electronics',
    link: "/#"
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: '/#'
  },
  {
    id: 2,
    name: "Best Selling",
    link: '/#'
  },
  {
    id: 3,
    name: "Top Rated",
    link: '/#'
  }
]

const Navbar = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHeader(true);
      } else if (window.scrollX === 200) {
        setHeader(false);
      } else {
        setHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 sticky top-0 z-40 '>
      {/* upper Navbar */}
      <div className='bg-primary/40 py-4 '>
        <div className='container flex justify-between items-center'>
          <div>
            <a href="#"
              className='font-bold text-2xl sm:text-3xl flex gap-2 dark:text-white'>
              <img src={Logo} alt="logo" className='w-10' />
              Shopsy
            </a>
          </div>
          {/* search bar and order button */}
          <div className='flex justify-between gap-4 items-center'>
            <div className='group relative hidden sm:block'>
              <input type="text"
                placeholder='search'
                className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-100 px-4 py-1 focus:outline-none focus:border focus:border-orange-400 dark:text-white dark:bg-gray-800'
              />
              <MdSearch className='text-gray-500 group-hover:text-primary absolute top-3 right-3 dark:text-white' />
            </div>
            {/* order button */}
            <button className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
              <span className='group-hover:block hidden transition-all duration-200'>Order</span>
              <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer' />
            </button>
            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div className={`justify-center ${header ? "hidden" : "flex"}`}
        data-aos="zoom-out"
        data-aos-duration="500"
        data-aos-delay="100"
      >
        <ul className='sm:flex hidden items-center gap-4'>
          {
            Menu.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className='inline-block px-4 hover:text-primary duration-200'
                >{data.name}</a>
              </li>
            ))
          }
          {/* simple Dropdown and link */}
          <li className='group relative cursor-pointer'>
            <a
              href="#"
              className='flex items-center gap-1.5 py-2'
            >
              Trending Products
              <span >
                <FaCaretDown className='transition-all duration-200 group-hover:rotate-180' />
              </span>
            </a>
            <div className='absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white shadow-md p-2 text-black'>
              <ul>
                {
                  DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <a href={data.link}
                        className='inline-block w-full rounded-md hover:bg-primary/20'
                      >
                        {data.name}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div >
  );
};

export default Navbar;





