import React from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

export default function DashboardTemplate() {
  return (
    <div>
       <div className='w-full h-full bg-white'>
            <div className='flex items-start'>
                <Sidebar/>
                <div className='w-full flex-1'>
                    <div className='border-b border-grey/20 px-6 pt-6 lg:px-12 lg:pt-12'>
                        <h2 className='text-xl font-bold text-black mb-8'>Dashboard Template</h2>
                        <div className='grid grid-cols-1'>
                            <ul className='flex overflow-x-auto overflow-y-hidden mt-2 gap-4 text-light-grey text-base'>
                                <li><a href="#" className='px-2 py-3 whitespace-nowrap -mb-[1px] flex items-center font-semibold border-b-[3px] border-black text-black' >All deshboard</a></li>
                                <li><a href="#" className='px-2 py-3 whitespace-nowrap -mb-[1px] flex items-center hover:border-b-[3px] border-transparent hover:!border-black hover:text-black'>CMS</a></li>
                                <li><a href="#" className='px-2 py-3 whitespace-nowrap -mb-[1px] flex items-center hover:border-b-[3px] border-transparent hover:!border-black hover:text-black'>Marketing</a></li>
                                <li><a href="#" className='px-2 py-3 whitespace-nowrap -mb-[1px] flex items-center hover:border-b-[3px] border-transparent hover:!border-black hover:text-black'>sales</a></li>
                                <li><a href="#" className='px-2 py-3 whitespace-nowrap -mb-[1px] flex items-center hover:border-b-[3px] border-transparent hover:!border-black hover:text-black'>Service</a></li>
                                <li><a href="#" className='px-2 py-3 whitespace-nowrap -mb-[1px] flex items-center hover:border-b-[3px] border-transparent hover:!border-black hover:text-black'>Target account</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='h-[calc(100vh-248px)] p-6 lg:px-12 lg:py-8 overflow-auto'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4'>
                            <Link to='/maindashboard'>
                            <div className='border border-grey/20 rounded-md p-4 cursor-pointer hover:shadow-2xl transition-all duration-300'>
                                <div className='w-full h-32 overflow-hidden mb-4 bg-soft flex items-center justify-center text-accent'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                </div>
                                <h3 className='mb-1 font-semibold text-lg text-black'>Blank Dashboard</h3>
                                <p>Start with a blank dashborde and add any reports you need.</p>
                            </div>
                            </Link>
                            <div className='border border-grey/20 rounded-md p-4 cursor-pointer hover:shadow-2xl transition-all duration-300'>
                                <div className='w-full h-32 overflow-hidden mb-4 bg-soft flex items-center justify-center text-accent'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                </div>
                                <h3 className='mb-1 font-semibold text-lg text-black'>Blank Dashboard</h3>
                                <p>Start with a blank dashborde and add any reports you need.</p>
                            </div>
                            <div className='border border-grey/20 rounded-md p-4 cursor-pointer hover:shadow-2xl transition-all duration-300'>
                                <div className='w-full h-32 overflow-hidden mb-4 bg-soft flex items-center justify-center text-accent'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                </div>
                                <h3 className='mb-1 font-semibold text-lg text-black'>Blank Dashboard</h3>
                                <p>Start with a blank dashborde and add any reports you need.</p>
                            </div>
                            <div className='border border-grey/20 rounded-md p-4 cursor-pointer hover:shadow-2xl transition-all duration-300'>
                                <div className='w-full h-32 overflow-hidden mb-4 bg-soft flex items-center justify-center text-accent'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                </div>
                                <h3 className='mb-1 font-semibold text-lg text-black'>Blank Dashboard</h3>
                                <p>Start with a blank dashborde and add any reports you need.</p>
                            </div>
                            <div className='border border-grey/20 rounded-md p-4 cursor-pointer hover:shadow-2xl transition-all duration-300'>
                                <div className='w-full h-32 overflow-hidden mb-4 bg-soft flex items-center justify-center text-accent'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                </div>
                                <h3 className='mb-1 font-semibold text-lg text-black'>Blank Dashboard</h3>
                                <p>Start with a blank dashborde and add any reports you need.</p>
                            </div>
                            <div className='border border-grey/20 rounded-md p-4 cursor-pointer hover:shadow-2xl transition-all duration-300'>
                                <div className='w-full h-32 overflow-hidden mb-4 bg-soft flex items-center justify-center text-accent'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                </div>
                                <h3 className='mb-1 font-semibold text-lg text-black'>Blank Dashboard</h3>
                                <p>Start with a blank dashborde and add any reports you need.</p>
                            </div>
                            <div className='border border-grey/20 rounded-md p-4 cursor-pointer hover:shadow-2xl transition-all duration-300'>
                                <div className='w-full h-32 overflow-hidden mb-4 bg-soft flex items-center justify-center text-accent'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                </div>
                                <h3 className='mb-1 font-semibold text-lg text-black'>Blank Dashboard</h3>
                                <p>Start with a blank dashborde and add any reports you need.</p>
                            </div>
                            <div className='border border-grey/20 rounded-md p-4 cursor-pointer hover:shadow-2xl transition-all duration-300'>
                                <div className='w-full h-32 overflow-hidden mb-4 bg-soft flex items-center justify-center text-accent'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                </div>
                                <h3 className='mb-1 font-semibold text-lg text-black'>Blank Dashboard</h3>
                                <p>Start with a blank dashborde and add any reports you need.</p>
                            </div>
                            <div className='border border-grey/20 rounded-md p-4 cursor-pointer hover:shadow-2xl transition-all duration-300'>
                                <div className='w-full h-32 overflow-hidden mb-4 bg-soft flex items-center justify-center text-accent'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                </div>
                                <h3 className='mb-1 font-semibold text-lg text-black'>Blank Dashboard</h3>
                                <p>Start with a blank dashborde and add any reports you need.</p>
                            </div>
                           
                        </div>
                    </div>
                    <div className='border-t border-grey/20 py-5 px-12 flex items-center justify-end gap-2'>
                        <button type='buttom' className='btn-white'>Cancel</button>
                        <button type='button' className='btn-gray'>Next</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
