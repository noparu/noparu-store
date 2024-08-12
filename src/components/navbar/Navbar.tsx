import React from 'react'

const Navbar = () => {
    return (
        <div className="w-full flex items-center justify-between px-[3vh] sm:px-[5vh] py-[2vh]">
            <div className="">
                NoparuStore
            </div>
            <div className="flex flex-col gap-1 w-6 h-4 justify-between">
                <span className='w-full h-[2px] bg-zinc-700'></span>
                <span className='w-full h-[2px] bg-zinc-700'></span>
                <span className='w-full h-[2px] bg-zinc-700'></span>
            </div>
        </div>
    )
}

export default Navbar
