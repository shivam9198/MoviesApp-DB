import React from 'react'
import Sidebar from './templete/Sidebar';
import Topnav from './templete/Topnav';

function Home() {
  document.title = "Movieverse | Homepage";
  return (
<>
<Sidebar/>
<div className='w-[80%] h-full '>
  <Topnav/>
</div>
</>
 
  )
}

export default Home


// secondry color -6556CD
// primary color - #1F1E24