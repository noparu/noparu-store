import React from 'react'

const Card = () => {
    return (
        <div className=''>
            <div className="w-48 h-48 bg-zinc-200 rounded-md"></div>
            <span className='subtitle text-sm'>Nintendo</span>
            <h1 className='truncate w-48 font-medium'>Nintendo DSI XL {`(Midnight Blue)`}</h1>
            <span className='font-medium'>$100.00</span>
        </div>
    )
}

export default Card
