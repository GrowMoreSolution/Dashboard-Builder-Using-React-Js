import React from 'react'

export default function Simpledata() {
  return (

        <div>
        <div className="bg-white rounded-md shadow w-100 py-3 px-2 relative">
                <div className="flex items-center justify-between mb-3">
                    <p className="font-medium text-sm">Amount by stage</p>
                </div>
                <div className='grid grid-flow-row gap-2 max-h-96 overflow-auto'>
                <div className="border border-gray-300 rounded p-4">
                    <div className="flex gap-2 items-center justify-between">
                        <div className='space-y-1 text-left'>
                            <p className="text-grey text-[12px] font-medium">Clossing date: 18 jan 2021</p>
                            <p className="text-black font-medium pt-1 line-clamp-1">Web devlopment deal with Jane</p>
                            <div className="flex items-center gap-1 pt-1">
                                <img src="assets/img/avatar-2.png" alt="" className="rounded-full h-[18px] w-[18px] object-cover" />
                                <p className="text-grey text-[11px]">Jane mayer</p>
                            </div>
                        </div>
                        <div>
                          <p className="text-[18px] text-black font-medium text-right mb-1">$40,000</p>
                          <span className='bg-accent/10 whitespace-nowrap text-accent text-[12px] rounded-full px-2 py-1 font-medium'>Contract sent</span>
                        </div>
                    </div>
                </div>
                <div className="border border-gray-300 rounded p-4">
                    <div className="flex gap-2 items-center justify-between">
                        <div className='space-y-1 text-left'>
                            <p className="text-grey text-[12px] font-medium">Clossing date: 18 jan 2021</p>
                            <p className="text-black font-medium pt-1 line-clamp-1">Web devlopment deal with Jane</p>
                            <div className="flex items-center gap-1 pt-1">
                                <img src="assets/img/avatar-2.png" alt="" className="rounded-full h-[18px] w-[18px] object-cover" />
                                <p className="text-grey text-[11px]">Jane mayer</p>
                            </div>
                        </div>
                        <div>
                          <p className="text-[18px] text-black font-medium text-right mb-1">$40,000</p>
                          <span className='bg-accent/10 whitespace-nowrap text-accent text-[12px] rounded-full px-2 py-1 font-medium'>Contract sent</span>
                        </div>
                    </div>
                </div>
                <div className="border border-gray-300 rounded p-4">
                    <div className="flex gap-2 items-center justify-between">
                        <div className='space-y-1 text-left'>
                            <p className="text-grey text-[12px] font-medium">Clossing date: 18 jan 2021</p>
                            <p className="text-black font-medium pt-1 line-clamp-1">Web devlopment deal with Jane</p>
                            <div className="flex items-center gap-1 pt-1">
                                <img src="assets/img/avatar-2.png" alt="" className="rounded-full h-[18px] w-[18px] object-cover" />
                                <p className="text-grey text-[11px]">Jane mayer</p>
                            </div>
                        </div>
                        <div>
                          <p className="text-[18px] text-black font-medium text-right mb-1">$40,000</p>
                          <span className='bg-accent/10 whitespace-nowrap text-accent text-[12px] rounded-full px-2 py-1 font-medium'>Contract sent</span>
                        </div>
                    </div>
                </div>
                
                </div>
                
                <div className="absolute right-2 top-4">
                  <a href="/" className="text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M112,60a16,16,0,1,1,16,16A16,16,0,0,1,112,60Zm16,52a16,16,0,1,0,16,16A16,16,0,0,0,128,112Zm0,68a16,16,0,1,0,16,16A16,16,0,0,0,128,180Z"></path></svg>         
                  </a>
                  <ul className="absolute z-50 mt-1 min-w-[120px] rounded bg-white p-0 py-2 text-sm shadow right-0 whitespace-nowrap hidden">
                      <li><a href="#" className='flex items-center px-4 gap-1 py-2 hover:bg-black/5 hover:text-black'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path></svg>
                        Duplicate Widget
                        </a></li>
                      <li><a href="#" className='flex items-center px-4 gap-1 py-2 text-primary hover:bg-black/5'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg>
                        Delete Widget</a>
                        </li>
                  </ul>
              </div>
            </div>
   </div>
  )
}
