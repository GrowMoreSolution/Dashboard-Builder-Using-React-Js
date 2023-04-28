import React from 'react'

export default function Charteithtext() {
  return (
    <div>
        <div className="bg-white rounded-md shadow w-full relative p-4">
            <div className='flex flex-wrap items-center justify-between gap-2 mb-4'>
                <h2 className='text-lg font-semibold text-black'>Deal Revenue Forecast</h2>
                <a href='#' className='flex items-center gap-1 text-sm font-medium text-[#ff7043]'>
                    <p className=''>View More</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-3 h-3' width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg>
                </a>
            </div>
            <div className='flex flex-wrap gap-2'>
                <div className=''>
                    <p className='text-base text-black font-semibold mb-4'>Company Goals</p>
                    <div class="svg-item">
                        <svg width="100%" height="100%" viewBox="0 0 40 40" class="donut">
                            <circle class="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#fff"></circle>
                            <circle class="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5"></circle>
                            <circle class="donut-segment donut-segment-3" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5" stroke-dasharray="30 70" stroke-dashoffset="25"></circle>
                            <g class="donut-text donut-text-2">
                                <text y="40%" transform="translate(0, 2)">
                                    <tspan x="50%" text-anchor="middle" class="donut-data">February Goals</tspan>   
                                </text>
                                <text y="55%" transform="translate(0, 2)">
                                    <tspan x="50%" text-anchor="middle" class="donut-percent">$300,000</tspan>   
                                </text>
                            </g>
                        </svg>
                    </div>
                </div>
                <div className='grid grid-flow-row gap-3'>
                    <p className='text-base text-black font-semibold mb-4'>Team Goals</p>
                    <div>
                    <div className='space-y-1 mb-5'>
                        <div className='flex items-center justify-between gap-2'>
                            <p className='text-base text-black'>Marketing</p>
                            <p className='text-sm font-semibold text-grey'><samp className='text-black'>$29,000/</samp> $150,000</p>
                        </div>
                        <div class="w-full h-2 bg-black/10 rounded-full"><div class="bg-[#ff7043] h-2 rounded-full w-2/12"></div></div>
                    </div>
                    <div className='space-y-1 mb-5'>
                        <div className='flex items-center justify-between gap-2'>
                            <p className='text-base text-black'>Sales</p>
                            <p className='text-sm font-semibold text-grey'><samp className='text-black'>$120,060/</samp> $150,000</p>
                        </div>
                        <div class="w-full h-2 bg-black/10 rounded-full"><div class="bg-[#ff7043] h-2 rounded-full w-8/12"></div></div>
                    </div>
                    <div className='space-y-1 mb-5'>
                        <div className='flex items-center justify-between gap-2'>
                            <p className='text-base text-black'>Digital Marketing</p>
                            <p className='text-sm font-semibold text-grey'><samp className='text-black'>$139,100/</samp> $150,000</p>
                        </div>
                        <div class="w-full h-2 bg-black/10 rounded-full"><div class="bg-[#ff7043] h-2 rounded-full w-10/12"></div></div>
                    </div>
                    </div>
                    
                </div>
                
            </div>      
        </div>
    </div>
  )
}
