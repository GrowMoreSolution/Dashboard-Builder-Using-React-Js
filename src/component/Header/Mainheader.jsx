import React from 'react'

export default function Mainheader() {
  return (
    <div className='p-4 bg-black flex items-center justify-between'>
    <a href='#' className='flex items-center gap-1 text-white/80 text-xs'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
        <p className='hidden md:block'>Back to Dashboard Manager</p>
    </a>
    <h1 className='text-center font-semibold text-lg hidden sm:block text-white'>New Dashboard</h1>
    <div className='flex items-center justify-end gap-3'>
        <p className='text-white/80 text-xs hidden lg:block'>Last Saved: Today at 4:30PM</p>
        <button type='button' className='btn-gray bg-transparent border border-grey/50 px-4 text-sm py-2 hover:bg-grey hover:text-white hover:border-grey text-white'>Save as Draft</button>
        <button type='button' className='btn-gray bg-orange-600 border border-orange-600 hover:bg-transparent px-4 py-2 text-sm text-white'>Save & Publish</button>
    </div>
</div>
  )
}
