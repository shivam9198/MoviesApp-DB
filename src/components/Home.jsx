import React, { useEffect, useState } from 'react'
import Sidebar from './templete/Sidebar';
import Topnav from './templete/Topnav';
import Header from './templete/Header';
import axios from '../utils/axios';
import Treanding from './templete/Treanding';
import DropDown from './templete/DropDown';
import Loading from './Loading';

function Home() {
  document.title = "Movieverse | Homepage";
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null)
  const [category, setcategory] = useState("all")

   const getwallpaper =   async ()=> {
    try {
      const {data} = await axios.get(`/trending/all/day`);
  let randomWallpaper =
                     data.results[(Math.random() *data.results.length).toFixed()];
     setwallpaper(randomWallpaper);
    } catch (error) {
      console.log(error);
    }
  };

const getTrending = async ()=>{
  try {
    const {data} = await axios.get(`/trending/${category}/day`);
   settrending(data.results)
  } catch (error) {
    console.log(error);
  }
}



  useEffect(()=>{
    !wallpaper && getwallpaper();
    getTrending();
  

  },[category])



  return ( wallpaper && trending ?(
<>
<Sidebar/>
<div className='w-[80%] h-full overflow-auto overflow-x-hidden '>
  <Topnav/>
  <Header   data={wallpaper} />
  <div className='mb-3 flex justify-between p-3'>  <h1 className='text-3xl font-semibold text-zinc-400'>Trending</h1>
        <DropDown title= "filter" options = {["tv" , "movie", "all"] } func={(e)=> setcategory(e.target.value)} />
        </div>
  <Treanding  data={trending}  />
</div>
</>
  ):<Loading/>
 
  )
}

export default Home


// secondry color -6556CD
// primary color - #1F1E24