import Card from '@/components/card/Card'
import React from 'react'

const HomePage = () => {
    return (
        <div className="w-full">
            {/* Banner Section */}
            <div className="w-full bg-zinc-200 h-[300px]"></div>

            {/* Category Section */}
            <div className="w-full">
                {/* Category Title */}
                <div className="w-full flex items-center justify-between px-[3vh] sm:px-[5vh] py-[4vh]">
                    <div className="font-medium">Shop By Category</div>
                    <div className="font-normal">See All</div>
                </div>

                {/* Category Content */}
                <div className="w-full flex items-center px-[3vh] sm:px-[5vh] gap-[2vh] overflow-x-auto">
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
                    <div className="font-normal">See All</div>
                </div>

                {/* Curated For You Content */}
                <div className="w-full flex items-center px-[3vh] sm:px-[5vh] gap-[5vh] overflow-x-auto">
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
