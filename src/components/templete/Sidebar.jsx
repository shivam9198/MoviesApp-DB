import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='w-[20%] h-full border-r-2 border-zinc-200 text-white p-4' >
    <h1 className=' font-bold'>
    <i className="text-[#6556CD] ri-tv-fill text-2xl mr-2"></i>
      <span className='text-xl'>  MovieVerse.</span>
        </h1>
        <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
        <h1 className='font-semibold  mt-8 mb-2 text-white'>New Feeds.</h1>
        <Link className='hover:bg-[#6556CD]  hover:text-white p-3 rounded-xl duration-300 '>
        <i className=" mr-2 ri-fire-fill"></i>
        Trending
        </Link>
        <Link className='hover:bg-[#6556CD]  hover:text-white p-4 rounded-xl duration-300 '>
        <i className=" mr-2 ri-magic-fill"></i>
        Popular
        </Link>
        <Link className='hover:bg-[#6556CD]  hover:text-white p-4 rounded-xl duration-300 '>
        <i className="mr-2 ri-movie-2-fill"></i>
        Movies
        </Link>
        <Link className='hover:bg-[#6556CD]  hover:text-white p-4 rounded-xl duration-300 '>
        <i className=" mr-2 ri-tv-2-fill"></i>
        Tv-Shows
        </Link>
        <Link className='hover:bg-[#6556CD]  hover:text-white p-4 rounded-xl duration-300 '>
        <i className=" mr-2 ri-team-fill"></i>
        People</Link>
        
        </nav>
        <nav className='flex flex-col text-zinc-400 text-xl gap-3'>
        <h1 className='font-semibold  mt-8 mb-2 text-white'>App Information.</h1>
        <Link className='hover:bg-[#6556CD]  hover:text-white p-4 rounded-xl duration-300 '>
        <i className=" mr-2 ri-information-2-fill"></i> 
        About us
        </Link>
        <Link className='hover:bg-[#6556CD]  hover:text-white p-4 rounded-xl duration-300 '>
        <i className=" mr-2 ri-phone-fill"></i>
        Contact
        </Link>
        </nav>
      

    </div>
  )
}

export default Sidebar