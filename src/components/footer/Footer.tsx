import React from 'react'

const Footer = () => {
    return (
        <div className='w-full flex flex-col px-[5vh] mt-10 border-t bg-zinc-100'>
            <div className="w-full flex flex-col sm:flex-row gap-10 sm:gap-0 py-[5vh]">
                <div className="w-1/2">NoparuStore</div>
                <div className="flex gap-20">
                    <div className="flex flex-col gap-3">
                        <h1 className='text-sm subtitle'>Product</h1>
                        <span>Overview</span>
                        <span>Features</span>
                        <span>Solutions</span>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h1 className='text-sm subtitle'>Product</h1>
                        <span>Overview</span>
                        <span>Features</span>
                        <span>Solutions</span>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h1 className='text-sm subtitle'>Product</h1>
                        <span>Overview</span>
                        <span>Features</span>
                        <span>Solutions</span>
                    </div>
                </div>
            </div>
            <div className="w-full py-[5vh] flex justify-end border-t">
                <span>copyright</span>
            </div>
        </div>
    )
}

export default Footer
