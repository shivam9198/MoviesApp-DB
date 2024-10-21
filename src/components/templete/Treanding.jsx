import React from 'react'
import DropDown from './DropDown'

function Treanding({data}) {
  return (
       
      

<div className='w-[100%] flex p-1 overflow-y-hidden '>
        
        {data.map((e,i) =>(
            <div key={i} className="min-w-[15%] bg-zinc-900 mr-5 rounded-md  mb-5">
                <img className='w-full h-[55%] rounded-md object-cover'
                src={`https://image.tmdb.org/t/p/original/${
                    e.backdrop_path ||e.poster_path}`}
                />

                <div className='text-white p-3 h-[45%]  overflow-hidden'>
                <h1 className='text-xl font-semibold  '>
                {e.name || e.title || e.original_name || e.original_title}
                </h1>
                
                  <p className='mb-3 text-md'>
                   {e.overview.slice(0,40)}...
              <span className='text-zinc-600'>more</span>
    </p>
                </div>
            </div>
        )
            )}
     
</div>

 

  )
}

export default Treanding