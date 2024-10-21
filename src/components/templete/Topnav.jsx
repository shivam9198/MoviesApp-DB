
import axios from '../../utils/axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Topnav() {
const [query, setquery] = useState("")
const [searches, setsearches] = useState(null)

const getsearch = async ()=>{
  try {
    const {data} = await axios.get(`/search/multi?query=${query}`)


    setsearches(data.results);
   
    
  } catch (error) {
    console.log(error);
    
  }
}
useEffect (()=>{
  getsearch()
},[query])


  return (
    <div className='w-full h-[10vh] flex relative justify-start pl-[18%] items-center '>
      <i className="text-2xl text-zinc-400 ri-search-line"></i>
      <input  
      onChange={(e)=>setquery(e.target.value)}
      value={query}
      className ="w-[50%] text-zinc-400  mx-10 p-5 text-zinc-200 outline-none border-none bg-transparent"
       type="text"
       placeholder='search anything'/>

       {query.length > 0 && (
         <i 
         onClick= {() => setquery("") }
         className=" text-zinc-400 text-3xl ri-close-fill">
            
        </i>
      ) }

      

       <div className='w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] absolute overflow-auto' >
        {searches && searches.map((e,i)=> (
            <Link key={i} className='hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-200'>
        <img  className='w-[10vh] h-[10vh] object-cover  rounded mr-5'
        src= {`https://image.tmdb.org/t/p/original/${e.backdrop_path || e.profile_path}`}/>
        <span>{e.name || e.title || e.original_name || e.original_title}</span>
        </Link>
          ))}

      
        
        
       
       </div>
    </div>
  )
}


export default Topnav

// t=${query}