import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import Topnav from './templete/Topnav'
import DropDown from './templete/DropDown'
import Cards from './Cards';
import axios from '../utils/axios';
import Loading from './Loading';


function Trends() {
    
    const [category, setcategory] = useState("all");
    const [duration, setduration] = useState("day");
    const [trending, settrending] = useState(null)

    const getTrending = async ()=>{
        try {
          const {data} = await axios.get(`/trending/${category}/${duration}`);
         settrending(data.results)
        } catch (error) {
          console.log(error);
        }
      }
      
      
      
        useEffect(()=>{
          getTrending();
        
      
        },[category,duration])

 const navigate = useNavigate()

  return trending?  (
    <div className='p-[2%] w-screen h-screen overflow-hidden overflow-y-auto '>
        <div className='flex  w-full items-center justify-between'>
            <h1 className=' text-zinc-400 font-semibold text-3xl '>
            
            <i  onClick={()=>navigate(-1)} class=" hover:text-[#6556CD]  text-zinc-400 mr-2  text-2xl ri-arrow-left-line"></i>

                Trending
                </h1>
                <Topnav/>
                <DropDown title= "Category" options = {["tv" , "movie", "all"] } func={(e)=>setcategory(e.target.value)}/>
                <div className='w-[2%]'></div>
                <DropDown title= "Duration" options = {["days" , "weeks", ] }  func={(e)=>setduration(e.target.value)}/>
        </div>

        <Cards trends={trending} title={category}/>

    </div>
  ):<Loading/>
}

export default Trends