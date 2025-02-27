import Card from '@/components/card/Card'
import React from 'react'

const HomePage = () => {
    return (
        <div className="w-full">
            {/* Banner Section */}
            <img src="https://static.vecteezy.com/system/resources/thumbnails/002/006/774/small/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg" alt="noparu store" className='w-full' />

            {/* Category Section */}
            <div className="w-full">
                {/* Category Title */}
                <div className="w-full flex items-center justify-between px-[3vh] sm:px-[5vh] py-[4vh]">
                    <div className="font-medium">Shop By Category</div>
                    <div className="text-sm subtitle">See All</div>
                </div>

                {/* Category Content */}
                <div className="w-full flex items-center px-[3vh] sm:px-[5vh] gap-[2vh] overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-300 scrollbar-track-zinc-100">
                    {/* Category Bubble */}
                    <div className="flex flex-col items-center gap-[1vh]">
                        <div className="w-16 h-16 rounded-full bg-zinc-200"></div>
                        <h2 className="text-sm">Women</h2>
                    </div>
                    <div className="flex flex-col items-center gap-[1vh]">
                        <div className="w-16 h-16 rounded-full bg-zinc-200"></div>
                        <h2 className="text-sm">Women</h2>
                    </div>
                    <div className="flex flex-col items-center gap-[1vh]">
                        <div className="w-16 h-16 rounded-full bg-zinc-200"></div>
                        <h2 className="text-sm">Women</h2>
                    </div>
                    <div className="flex flex-col items-center gap-[1vh]">
                        <div className="w-16 h-16 rounded-full bg-zinc-200"></div>
                        <h2 className="text-sm">Women</h2>
                    </div>
                    <div className="flex flex-col items-center gap-[1vh]">
                        <div className="w-16 h-16 rounded-full bg-zinc-200"></div>
                        <h2 className="text-sm">Women</h2>
                    </div>
                </div>
            </div>

            {/* Curated For You Section */}
            <div className="w-full">
                {/* Curated For You Title */}
                <div className="w-full flex items-center justify-between px-[3vh] sm:px-[5vh] py-[4vh]">
                    <div className="font-medium">Curated For You</div>
                    <div className="text-sm subtitle">See All</div>
                </div>

                {/* Curated For You Content */}
                <div className="w-full flex items-center px-[3vh] sm:px-[5vh] gap-[5vh] overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-300 scrollbar-track-zinc-100">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default HomePage
