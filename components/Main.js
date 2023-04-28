import React from 'react'
import { AiOutlineMail,AiOutlineInstagram } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
              <p className='uppercase text-sm tracking-widest text-gray-600'>
                Let's build something together
              </p>
              <h1 className='py-4 text-gray-700'>
                Hi, I'm <span className='text-[#5651e5]'>Deepak</span>
              </h1>
              <h1 className='py-4 text-gray-700'>
              A Front-End Web Developer
              </h1>
              <p className='py-4 text-gray-600 max-width-[70%] m-auto'>
                I'm front-end developer specializing in building & designing. Also do Graphic Designing & all the work related to Digital Marketing.
              </p>
              <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                <a href='https://www.linkedin.com/in/deepak-sinha9911'>
                <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-125 ease-in duration-300">
                  <FaLinkedinIn/>
                </div>
                </a>
                <a href='https://github.com/deepak-sinha'>
                <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-125 ease-in duration-300">
                  <FaGithub/>
                </div>
                </a>
                <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-125 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-125 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
                <a href="https://instagram.com/graphiteck?igshid=YmMyMTA2M2Y=">
                <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-125 ease-in duration-300">
                  <AiOutlineInstagram />
                </div>
                </a>
              </div>
            </div>
        </div>
    </div>

  )
}

export default Main