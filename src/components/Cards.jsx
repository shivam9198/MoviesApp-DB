import React from 'react'
import { Link } from 'react-router-dom'

function Cards({trends,title}) {
  return (
    <div className='w-full flex flex-wrap m-[3%] '>
      {trends.map((e,i)=><Link key={i} className='w-[25vh] ml-[3%] mb-[2.5%] rounded-md '>
        <img className=' shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[32vh] object-cover rounded-md' src={`https://image.tmdb.org/t/p/original/${
                    e.backdrop_path || e.profile_path}`} 
                    alt='#'
                    />
        <h1 className='text-2xl text-zinc-300 mt-3 font-semi-bold '>{e.name || e.title || e.original_name || e.original_title}</h1>
      </Link>)
      }
     

    </div>
  )
}

export default Cards