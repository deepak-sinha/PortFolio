import React from 'react'
import Image from 'next/image'
import AboutImg from '../public/assets/about.jpg'

const About = () => {
  return (
    <div id='about' className="w-full md:h-screen p-2 flex items-center py-12 px-12">
        <div className="max-w-[1240px] md:grid grid-cols-3 gap-8">
            <div className="col-span-2">
                <h3 className="uppercase text-xl tracking-widest text-[#5651e5]">About</h3>
                <h4 className='py-4'>Who I Am</h4>
                <p className='py-2 text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p lassName='py-2 text-gray-600 underline curson-pointer'>Check out some of my latest projects</p>
            </div>
            <div className='w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex flex-center justify-center p-4 hover:scale-105 ease-in duration-300 sm:p-8'>
                <Image className='rounded-xl' src={AboutImg}></Image>
            </div>
        </div>
    </div>
  )
}

export default About