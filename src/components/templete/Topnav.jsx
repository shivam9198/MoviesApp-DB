import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Topnav() {
const [query, setquery] = useState("")


  return (
    <div className='w-full h-[10vh] flex relative justify-start ml-[15%] items-center '>
      <i class="text-2xl text-zinc-400 ri-search-line"></i>
      <input  
      onChange={(e)=>setquery(e.target.value)}
      value={query}
      className ="w-[50%] text-zinc-400  mx-10 p-5 text-zinc-200 outline-none border-none bg-transparent"
       type="text"
       placeholder='search anything'/>

       {query.length > 0 && (
         <i 
         onClick= {() => setquery("") }
         class=" text-zinc-400 text-3xl ri-close-fill">
            
        </i>
      ) }

      

       <div className='w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] absolute overflow-auto' >

        {/* <Link className='hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-200'>
        <img src=""/>
        <span>Hello everyone</span>
        </Link> */}
        
       
       </div>
    </div>
  )
}

export default Topnav