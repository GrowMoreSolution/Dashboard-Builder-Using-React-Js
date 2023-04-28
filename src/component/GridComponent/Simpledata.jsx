import React from 'react'

export default function Simpledata() {
  return (

        <div>
        <div className="bg-white rounded-md shadow w-full relative">
             <div className="flex flex-wrap items-center justify-between gap-4 mb-4 border-b border-grey/50 p-4">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path></svg>
                 <div className='flex items-center gap-2 mr-auto'>
                     <div className='w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center'>
                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M168,128a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,128Zm-8,24H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16ZM216,48V200a32,32,0,0,1-32,32H72a32,32,0,0,1-32-32V48A16,16,0,0,1,56,32H72V24a8,8,0,0,1,16,0v8h32V24a8,8,0,0,1,16,0v8h32V24a8,8,0,0,1,16,0v8h16A16,16,0,0,1,216,48Zm-16,0H184v8a8,8,0,0,1-16,0V48H136v8a8,8,0,0,1-16,0V48H88v8a8,8,0,0,1-16,0V48H56V200a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16Z"></path></svg>
                     </div>
                     <p className="text-sm text-black font-semibold">Task created Esther Howard</p>
                 </div>
                 <div className='flex items-center gap-2 ml-auto'>
                         <p className='text-sm font-medium text-grey/50'>Due:</p>
                         <svg xmlns="http://www.w3.org/2000/svg" className='text-grey' width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"></path></svg>
                         <p className='text-sm font-medium text-black'>Today, 12:00 PM</p>
                     </div> 
                 <div>

                 </div>
                 
             </div>
             <div className='p-4 flex items-start gap-3'>
                 <div className='w-8 h-8 rounded-full bg-grey/10 border border-grey/20 flex-none'></div>
                 <div className='flex-1'>
                   <h2 className='text-base font-bold text-black mb-2'>Prepare quote for Jerome Bell</h2>
                   <p className='text-grey'>She's Interested in our new product line and wants our very best price. please include a detailed breakdown of costs.</p>
                 </div>
             </div> 
             <div className="absolute right-2 top-[22px]">
                 <a href="/" class="text-black">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M112,60a16,16,0,1,1,16,16A16,16,0,0,1,112,60Zm16,52a16,16,0,1,0,16,16A16,16,0,0,0,128,112Zm0,68a16,16,0,1,0,16,16A16,16,0,0,0,128,180Z"></path></svg>         
                 </a>
                 <ul class="absolute z-50 mt-1 min-w-[120px] rounded bg-white p-0 py-2 text-sm shadow right-0 whitespace-nowrap hidden">
                     <li><a href="javascript:;" className='flex items-center px-4 gap-1 py-2 hover:bg-black/5 hover:text-black'>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path></svg>
                       Duplicate Widget
                       </a></li>
                     <li><a href="javascript:;" className='flex items-center px-4 gap-1 py-2 text-primary hover:bg-black/5'>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg>
                       Delete Widget</a>
                       </li>
                 </ul>
             </div>
         </div>
   </div>
  )
}
