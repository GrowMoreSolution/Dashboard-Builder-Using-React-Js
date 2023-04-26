import React from 'react'

export default function Header() {
  return (
    <div>
       <div className='p-4 bg-black grid grid-cols-3'>
            <a href='#' className='flex items-center gap-1 text-white/80 text-xs'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                <p>Back to Dashboard Manager</p>
            </a>
            <h1 className='text-center font-semibold text-lg text-white'>New Dashboard</h1>
            <div className='flex items-center justify-end gap-3'>
                <p className='text-white/80 text-xs'>Last Saved: Today at 4:30PM</p>
                <button type='button' className='btn-gray bg-transparent border border-white px-4 text-sm py-2 text-white'>Save as darft</button>
                <button type='button' className='btn-gray bg-orange-600 border border-orange-600 px-4 py-2 text-sm text-white'>Save & Publish</button>
            </div>
       </div>
       <div className='px-4 bg-white grid grid-cols-3 shadow items-center relative z-10'>
            <div>
                <ul className='flex overflow-x-auto overflow-y-hidden mt-2 gap-4 text-light-grey text-base'>
                    <li><a href="#" className='px-2 py-3 whitespace-nowrap -mb-[1px] flex items-center font-semibold border-b-[3px] border-black text-black' >content</a></li>
                    <li><a href="#" className='px-2 py-3 whitespace-nowrap -mb-[1px] flex items-center hover:border-b-[3px] border-transparent hover:!border-black hover:text-black'>Dashboard Information</a></li>
                </ul>
            </div>
            <div className='text-center' >
                <div className='items-center justify-center inline-flex col-span-1 space-x-1 border border-grey/20 bg-white rounded-md'>
                    <button type='button' className='flex items-center p-2 bg-white rounded-l-md hover:shadow-lg transition-all duration-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </button>
                    <button type='button' className='flex items-center p-2 bg-white hover:shadow-lg transition-all duration-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                    </button>
                    <button type='button' className='flex items-center p-2 bg-white rounded-r-md hover:shadow-lg transition-all duration-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                    </button>
                </div>
                
            </div>
            <div className='flex justify-end gap-2'>
                <div className='flex items-center'>
                    <button type='button' className='flex items-center p-2 bg-white border border-r-0 border-grey/20 rounded-l-md hover:shadow-lg transition-all duration-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-up-left"><polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path></svg>
                    </button>
                    <button type='button' className='flex items-center p-2 bg-white border border-grey/20 rounded-r-md hover:shadow-lg transition-all duration-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-up-right"><polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path></svg>
                    </button>
                </div>
                <div className='h-[38px] w-px bg-grey/40 mx-3'></div>
                <button type='button' className='btn-gray bg-transparent border border-grey/50 px-4 text-sm py-2 text-grey hover:bg-grey hover:text-white'>Preview</button>
                <select className='form-select rounded-md py-1.5 border-grey/40 text-sm'>
                    <option>Action</option>
                    <option>Action</option>
                    <option>Action</option>
                </select>
            </div>
       </div>
       <div className='flex items-start'>
                <div className='w-64 lg:w-96 flex-none bg-white h-[calc(100vh-130px)] shadow border-r border-light-grey/20'>

                </div>
                <div className='w-full flex-1 bg-soft h-[calc(100vh-130px)]'>

                </div>
            </div>
    </div>
  )
}
