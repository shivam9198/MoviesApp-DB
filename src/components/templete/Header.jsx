import React from 'react'
import { Link } from 'react-router-dom'

function Header( {data}) {
  return (
    <div 
             style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5),rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/original/${
                    data.backdrop_path || data.profile_path})`,
            
                backgroundPosition: "center",
             backgroundSize: "cover",
                
            }}
    
    
     
    className='full h-[52vh] flex flex-col justify-end p-[3%]  '>
    
        <h1 className='text-5xl font-black text-white '>{data.name || data.title || data.original_name || data.original_title}</h1>

    <p className='text-white w-[60%] mt-3'>
        {data.overview.slice(0,200)}...
        <Link className='text-blue-600'>more</Link>
    </p>

    <p  className='text-white font-semibold flex gap-3 '>
    <i className="ri-megaphone-fill font-bold text-2xl text-yellow-400 "></i>{data.release_date ||"No Information"}
    <i className="ri-album-fill font-bold text-2xl text-yellow-400"></i>{data.media_type}
    </p>

<Link className='bg-[#6556CD] text-white font-semibold w-[15%] p-4 text-center rounded-lg mt-3' >
Watch Trailer
</Link>
        </div>
  )
}

export default Header