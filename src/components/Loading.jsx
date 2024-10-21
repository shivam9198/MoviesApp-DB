import Loader from '/Loader.gif';


function Loading() {
  return (
    <div className='w-full h-screen flex justify-center bg-black items-center'>
        <img  className='obeject-cover h-[60%]' src={Loader}/>
    </div>
  )
}

export default Loading