import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png'

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-start px-4 bg-[black] text-gray-300'>
      <div>
        <img src={Logo} alt="Logo" style={{width: '80px'}}/>
      </div>
      
      {/* Menu */}
      <div className='hidden md:flex'>
        <ul className='md:flex py-6'>
          <li className='hover:text-green-300'>Home</li>
          <li className='hover:text-blue-600'>About</li>
          <li className='hover:text-gray-700'>Experience</li>
          <li className='hover:text-gray-400'>Skills</li>
          <li className='hover:text-green-300'>Contact</li>
        </ul>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 py-7'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className = {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl hover:text-green-300'>Home</li>
          <li className='py-6 text-4xl hover:text-blue-600'>About</li>
          <li className='py-6 text-4xl hover:text-gray-700'>Experience</li>
          <li className='py-6 text-4xl hover:text-gray-400'>Skills</li>
          <li className='py-6 text-4xl hover:text-green-300'>Contact</li>
        </ul>

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul className=''>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-white'
              href="/">
              Linkedin <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700'>
            <a className='flex justify-between items-center w-full text-white'
              href="/">
              GitHub <FaGithub size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-300'>
            <a className='flex justify-between items-center w-full text-white'
              href="/">
              Email <HiOutlineMail size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-400'>
            <a className='flex justify-between items-center w-full text-white'
              href="/">
              Resume <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar
