import React from 'react'
import Image from 'next/Image'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
       <h3 className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</h3>
       <h2 className='py-4'>What I Can Do</h2>
       <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
        

        <div className='p-5 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image 
              src='/../public/assets/skills/html.png'
              width='64px' 
              height='64px'  alt='/' />
            </div>
            <div className='flex flex-col items-center jsutify-center'>
                <h3>HTML</h3>
              </div>
          </div>
        </div>

        <div className='p-5 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image 
              src='/../public/assets/css.png'
              width='64px' 
              height='64px'  alt='/' />
            </div>
            <div className='flex flex-col items-center jsutify-center'>
                <h3>CSS</h3>
              </div>
          </div>
        </div>

        <div className='p-5 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image 
              src='/../public/assets/skills/javascript.png'
              width='64px' 
              height='64px'  alt='/' />
            </div>
            <div className='flex flex-col items-center jsutify-center'>
                <h3>JAVASCRIPT</h3>
              </div>
          </div>
        </div>

        <div className='p-5 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image 
              src='/../public/assets/skills/node.png'
              width='64px' 
              height='64px'  alt='/' />
            </div>
            <div className='flex flex-col items-center jsutify-center'>
                <h3>NODE</h3>
              </div>
          </div>
        </div>

        <div className='p-5 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image 
              src='/../public/assets/skills/react.png'
              width='64px' 
              height='64px'  alt='/' />
            </div>
            <div className='flex flex-col items-center jsutify-center'>
                <h3>REACT</h3>
              </div>
          </div>
        </div>

        <div className='p-5 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image 
              src='/../public/assets/skills/nextjs.png'
              width='64px' 
              height='64px'  alt='/' />
            </div>
            <div className='flex flex-col items-center jsutify-center'>
                <h3>NEXT</h3>
              </div>
          </div>
        </div>

        <div className='p-5 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image 
              src='/../public/assets/skills/firebase.png'
              width='64px' 
              height='64px'  alt='/' />
            </div>
            <div className='flex flex-col items-center jsutify-center'>
                <h3>FIREBASE</h3>
              </div>
          </div>
        </div>

        <div className='p-5 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image 
              src='/../public/assets/skills/tailwind.png'
              width='64px' 
              height='64px'  alt='/' />
            </div>
            <div className='flex flex-col items-center jsutify-center'>
                <h3>TAILWIND</h3>
              </div>
          </div>
        </div>

        <div className='p-5 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image 
              src='/../public/assets/skills/github1.png'
              width='64px' 
              height='64px'  alt='/' />
            </div>
            <div className='flex flex-col items-center jsutify-center'>
                <h3>GITHUB</h3>
              </div>
          </div>
        </div>

        <div className='p-5 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image 
              src='/../public/assets/skills/bootstraps.png'
              width='64px' 
              height='64px'  alt='/' />
            </div>
            <div className='flex flex-col items-center jsutify-center'>
                <h3>BOOTSTAPS</h3>
              </div>
          </div>
        </div>

        <div className='p-5 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image 
              src='/../public/assets/skills/design.png'
              width='64px' 
              height='64px'  alt='/' />
            </div>
            <div className='flex flex-col items-center jsutify-center'>
                <h3>GRAPHIC DESIGNING</h3>
              </div>
          </div>
        </div>

        <div className='p-5 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
          <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
              <Image 
              src='/../public/assets/skills/dm.png'
              width='64px' 
              height='64px'  alt='/' />
            </div>
            <div className='flex flex-col items-center jsutify-center'>
                <h3>DIGITAL MARKETING</h3>
              </div>
          </div>
        </div>





       </div>
      </div>
    </div>
  )
}

export default Skills