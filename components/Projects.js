import React from 'react'
import Image from 'next/Image'

const Projects = () => {
  return (
    <div id='projects' className="w-full">
        <div className="max-w-[1240px] mx-auto px-2 py-16">
         <h3 className="text-xl tracking-widest uppercase text-[#5651e5]">projects</h3>
         <h5 className='py-4'>What I Have Built </h5>
         <div className="grid md:grid-cols-2 gap-8">

           
           <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg:gradient-to-r from-[#5651e5] to-[#709dff]">

           </div>

         </div>
        </div>

    </div>
  )
}

export default Projects