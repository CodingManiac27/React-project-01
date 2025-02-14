import { useState } from 'react'
import './App.css'


function Buttons() {

    const [Wall, setWall] = useState("https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")

  return (
    <>  
        <div
            className="h-lvh w-lvw duration-1000"
            style={{
              backgroundImage: `url(${Wall})`, 
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
        >
            <div className='fixed flex justify-center bottom-12 inset-x-0 font-mono'>
                <div className='h-14 w-[42rem] max-w-auto shadow-lg bg-white/20 backdrop-blur-sm border-1 border-none flex rounded-xl p-3 justify-center'>
                    <button 
                        className=' rounded-xl h-8 w-20 px-4 mx-4 cursor-pointer text-black hover:text-white outline-black hover:outline-white outline-2 outline-offset-2 bg-white transition delay-100 hover:bg-black'
                        onClick={() => {setWall("https://wallpapercave.com/wp/wp14810420.webp")}}
                    > Anime </button>
                    <button 
                        className=' rounded-xl h-8 w-20 px-4 mx-4 cursor-pointer text-black hover:text-white outline-black hover:outline-white outline-2 outline-offset-2 bg-white transition delay-100 hover:bg-black'
                        onClick={() => {setWall("https://wallpapercave.com/wp/wp14068581.jpg")}}
                    > Cars </button>
                    <button 
                        className=' rounded-xl h-8 w-20 px-4 mx-4 cursor-pointer text-black hover:text-white outline-black hover:outline-white outline-2 outline-offset-2 bg-white transition delay-100 hover:bg-black'
                        onClick={() => {setWall("https://images.unsplash.com/photo-1513061379709-ef0cd1695189?q=80&w=2119&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")}}
                    > City </button>
                    <button 
                        className=' rounded-xl h-8 w-20 px-4 mx-4 cursor-pointer text-black hover:text-white outline-black hover:outline-white outline-2 outline-offset-2 bg-white transition delay-100 hover:bg-black'
                        onClick={() => {setWall("https://wallpapercave.com/wp/wp15039114.webp")}}
                    > Movie </button>
                </div>
            </div> 
        </div> 
    </>
  )
}

export default Buttons