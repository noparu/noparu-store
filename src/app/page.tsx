import React from 'react'

const HomePage = () => {
    return (
        <div className="w-full">
            {/* Banner Section */}
            <div className="w-full bg-zinc-200 h-[300px]"></div>

            {/* Category Section */}
            <div className="w-full">
                {/* Category Title */}
                <div className="w-full flex items-center justify-between px-[5vh] py-[4vh]">
                    <div className="font-medium">Shop By Category</div>
                    <div className="font-normal">See All</div>
                </div>

                {/* Category Content */}
                <div className="w-full flex items-center px-[5vh] gap-[2vh]">
                    {/* Category Bubble */}
                    <div className="flex flex-col items-center gap-[1vh]">
                        <div className="w-[9vh] h-[9vh] rounded-full bg-zinc-200"></div>
                        <h2 className="text-sm">Women</h2>
                    </div>
                    <div className="flex flex-col items-center gap-[1vh]">
                        <div className="w-[9vh] h-[9vh] rounded-full bg-zinc-200"></div>
                        <h2 className="text-sm">Women</h2>
                    </div>
                    <div className="flex flex-col items-center gap-[1vh]">
                        <div className="w-[9vh] h-[9vh] rounded-full bg-zinc-200"></div>
                        <h2 className="text-sm">Women</h2>
                    </div>
                    <div className="flex flex-col items-center gap-[1vh]">
                        <div className="w-[9vh] h-[9vh] rounded-full bg-zinc-200"></div>
                        <h2 className="text-sm">Women</h2>
                    </div>
                    <div className="flex flex-col items-center gap-[1vh]">
                        <div className="w-[9vh] h-[9vh] rounded-full bg-zinc-200"></div>
                        <h2 className="text-sm">Women</h2>
                    </div>
                </div>
            </div>

            {/* Curated For You Section */}
            <div className="w-full">
                <div className="w-full flex items-center justify-between px-[5vh] py-[4vh]">
                    <div className="font-medium">Curated For You</div>
                    <div className="font-normal">See All</div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
