import React, { useState } from "react";
import { memo } from "react";
import Grid from "./Grid";
import Mainheader from "./Mainheader";
import ChartGrid from "../GridComponent/ChartGrid";
import Numbers from "../GridComponent/Numbers";
import Simpledate from "../GridComponent/Simpledata";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Box } from "./Box.jsx";
import { useEffect } from "react";

const Maindashboard = memo(function Maindashboard(val) {
  const [BoxId, SetBoxId] = useState(1);

  function demo(event,id){
    event.stopPropagation()
    SetBoxId(id)
  }
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Mainheader />
        <div className="px-4 bg-white flex justify-between shadow items-center gap-5 relative z-10 py-4 md:py-0">
          <div className="md:grid grid-flow-row hidden">
            <ul className="flex overflow-x-auto overflow-y-hidden mt-2 gap-4 text-light-grey text-base">
              <li>
                <a
                  href="/"
                  className="px-2 py-3 whitespace-nowrap -mb-[1px] flex items-center font-semibold border-b-[3px] border-black text-black"
                >
                  Content
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="px-2 py-3 whitespace-nowrap -mb-[1px] flex items-center hover:border-b-[3px] border-transparent hover:!border-black hover:text-black"
                >
                  Dashboard Information
                </a>
              </li>
            </ul>
          </div>
          {/* <div className='text-center hidden lg:block' >
                <div className='items-center justify-center inline-flex col-span-1 space-x-1 border border-grey/20 bg-white rounded-md'>
                    <button type='button' className='flex items-center p-2 bg-white rounded-l-md hover:shadow-lg transition-all duration-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </button>
                    <button type='button' className='flex items-center p-2 bg-white hover:shadow-lg transition-all duration-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                    </button>
                    <button type='button' className='flex items-center p-2 bg-white rounded-r-md hover:shadow-lg transition-all duration-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                    </button>
                </div>
                
            </div> */}
          <div className="flex justify-end gap-2">
            <div className="flex items-center">
              <button
                type="button"
                className="flex items-center p-2 bg-white border border-r-0 border-grey/20 rounded-l-md hover:shadow-lg transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-corner-up-left"
                >
                  <polyline points="9 14 4 9 9 4"></polyline>
                  <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
                </svg>
              </button>
              <button
                type="button"
                className="flex items-center p-2 bg-white border border-grey/20 rounded-r-md hover:shadow-lg transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-corner-up-right"
                >
                  <polyline points="15 14 20 9 15 4"></polyline>
                  <path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>
                </svg>
              </button>
            </div>
            <div className="h-[38px] w-px bg-grey/40 mx-3"></div>
            <button
              type="button"
              className="btn-gray bg-transparent border border-grey/50 px-4 text-sm py-2 text-grey hover:bg-grey hover:text-white"
            >
              Preview
            </button>
            <select className="form-select rounded-md py-1.5 border-grey/40 text-sm">
              <option>Action</option>
              <option>Action</option>
              <option>Action</option>
            </select>
          </div>
        </div>
        <div className="flex items-start">
          <div className="w-64 lg:w-96 p-4 flex-none bg-white h-[calc(100vh-130px)] border-r border-light-grey/20 hidden sm:block">
           
             { BoxId == 1 ? 
              <div className="">
                <p className="mb-4 text-base font-semibold">Widget</p>
                <div className="grid grid-flow-row gap-3 " onDragEndCapture={() =>SetBoxId(2)}>
                  <Box
                    box={{
                      id: 2,
                      height:"100%",
                      data: (
                        <div
                          
                          className="border border-grey/20 rounded-md w-full flex items-center divide-x divide-grey/20"
                        >
                          <div className="flex-none p-3 text-grey">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              viewBox="0 0 256 256"
                            >
                              <path d="M104,60A12,12,0,1,1,92,48,12,12,0,0,1,104,60Zm60,12a12,12,0,1,0-12-12A12,12,0,0,0,164,72ZM92,116a12,12,0,1,0,12,12A12,12,0,0,0,92,116Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,116ZM92,184a12,12,0,1,0,12,12A12,12,0,0,0,92,184Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,184Z"></path>
                            </svg>
                          </div>
                          <div className="flex-1 p-3 flex items-center gap-2 text-black">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              viewBox="0 0 256 256"
                            >
                              <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,0,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z"></path>
                            </svg>
                            <p>Chart</p>
                          </div>
                        </div>
                      ),
                    }}
                  />
                  <Box
                    box={{
                      id: 3,
                      height:"100%",
                      data: (
                        <div className="border border-grey/20 rounded-md w-full flex items-center divide-x divide-grey/20">
                          <div className="flex-none p-3 text-grey">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              viewBox="0 0 256 256"
                            >
                              <path d="M104,60A12,12,0,1,1,92,48,12,12,0,0,1,104,60Zm60,12a12,12,0,1,0-12-12A12,12,0,0,0,164,72ZM92,116a12,12,0,1,0,12,12A12,12,0,0,0,92,116Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,116ZM92,184a12,12,0,1,0,12,12A12,12,0,0,0,92,184Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,184Z"></path>
                            </svg>
                          </div>
                          <div className="flex-1 p-3 flex items-center gap-2 text-black">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              viewBox="0 0 256 256"
                            >
                              <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM40,112H80v32H40Zm56,0H216v32H96ZM216,64V96H40V64ZM40,160H80v32H40Zm176,32H96V160H216v32Z"></path>
                            </svg>
                            <p>Simple data</p>
                          </div>
                        </div>
                      ),
                    }}
                  />
                  <Box
                    box={{
                      id: 1,
                      height:"100%",
                      data: (
                        <div className="border border-grey/20 rounded-md w-full flex items-center divide-x divide-grey/20">
                          <div className="flex-none p-3 text-grey">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              viewBox="0 0 256 256"
                            >
                              <path d="M104,60A12,12,0,1,1,92,48,12,12,0,0,1,104,60Zm60,12a12,12,0,1,0-12-12A12,12,0,0,0,164,72ZM92,116a12,12,0,1,0,12,12A12,12,0,0,0,92,116Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,116ZM92,184a12,12,0,1,0,12,12A12,12,0,0,0,92,184Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,184Z"></path>
                            </svg>
                          </div>
                          <div className="flex-1 p-3 flex items-center gap-2 text-black">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              viewBox="0 0 256 256"
                            >
                              <path d="M144,48V208a8,8,0,0,1-16,0V62.13L100.12,78.86a8,8,0,1,1-8.24-13.72l40-24A8,8,0,0,1,144,48Z"></path>
                            </svg>
                            <p>Numbers</p>
                          </div>
                        </div>
                      ),
                    }}
                  />
                  <Box
                    box={{
                      id: 4,
                      height:"100%",
                      data: (
                        <div className="border border-grey/20 rounded-md w-full flex items-center divide-x divide-grey/20">
                          <div className="flex-none p-3 text-grey">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              viewBox="0 0 256 256"
                            >
                              <path d="M104,60A12,12,0,1,1,92,48,12,12,0,0,1,104,60Zm60,12a12,12,0,1,0-12-12A12,12,0,0,0,164,72ZM92,116a12,12,0,1,0,12,12A12,12,0,0,0,92,116Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,116ZM92,184a12,12,0,1,0,12,12A12,12,0,0,0,92,184Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,184Z"></path>
                            </svg>
                          </div>
                          <div className="flex-1 p-3 flex items-center gap-2 text-black">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              viewBox="0 0 256 256"
                            >
                              <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"></path>
                            </svg>
                            <p>Calendar</p>
                          </div>
                        </div>
                      ),
                    }}
                  />
                  <Box
                    box={{
                      id: 5,
                      height:"100%",
                      data: (
                        <div className="border border-grey/20 rounded-md w-full flex items-center divide-x divide-grey/20">
                          <div className="flex-none p-3 text-grey">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              viewBox="0 0 256 256"
                            >
                              <path d="M104,60A12,12,0,1,1,92,48,12,12,0,0,1,104,60Zm60,12a12,12,0,1,0-12-12A12,12,0,0,0,164,72ZM92,116a12,12,0,1,0,12,12A12,12,0,0,0,92,116Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,116ZM92,184a12,12,0,1,0,12,12A12,12,0,0,0,92,184Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,184Z"></path>
                            </svg>
                          </div>
                          <div className="flex-1 p-3 flex items-center gap-2 text-black">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              viewBox="0 0 256 256"
                            >
                              <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,0,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z"></path>
                            </svg>
                            <p>Chat With Text</p>
                          </div>
                        </div>
                      ),
                    }}
                  />
                  <Box
                    box={{
                      id: 6,
                      height:"100%",
                      data: (
                        <div className="border border-grey/20 rounded-md w-full flex items-center divide-x divide-grey/20">
                          <div className="flex-none p-3 text-grey">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              viewBox="0 0 256 256"
                            >
                              <path d="M104,60A12,12,0,1,1,92,48,12,12,0,0,1,104,60Zm60,12a12,12,0,1,0-12-12A12,12,0,0,0,164,72ZM92,116a12,12,0,1,0,12,12A12,12,0,0,0,92,116Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,116ZM92,184a12,12,0,1,0,12,12A12,12,0,0,0,92,184Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,184Z"></path>
                            </svg>
                          </div>
                          <div className="flex-1 p-3 flex items-center gap-2 text-black">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="#000000"
                              viewBox="0 0 256 256"
                            >
                              <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>
                            </svg>
                            <p>Email report</p>
                          </div>
                        </div>
                      ),
                    }}
                  />
                </div>
              </div> :
                <div className="">
                <p className="mb-4 text-base font-semibold">Numbers</p>
                <div className="grid grid-flow-row gap-5">
                  <div className="">
                    <p className="text-sm mb-2 font-semibold">Widget Name</p>
                    <input
                      type="text"
                      className="form-input px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md"
                    />
                  </div>
                  <div className="">
                    <p className="text-sm mb-2 font-semibold">Value Source</p>
                    <select className="form-select px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md">
                      <option>Deals</option>
                      <option>Deals</option>
                      <option>Deals</option>
                      <option>Deals</option>
                    </select>
                  </div>
                  <div className="">
                    <p className="text-sm mb-2 font-semibold">Value Type</p>
                    <select className="form-select px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md">
                      <option>Actule Deals Value</option>
                      <option>Actule Deals Value</option>
                      <option>Actule Deals Value</option>
                      <option>Actule Deals Value</option>
                    </select>
                  </div>
                  <div className="">
                    <p className="text-sm mb-2 font-semibold">Value Unit</p>
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-2">
                      <div className="relative">
                        <label className="flex cursor-pointer rounded-lg border border-grey/20 bg-white justify-between items-start gap-4 py-1.5 px-2.5 text-center">
                          <h3 className="font-semibold text-lg relative z-10 mx-auto">
                            $
                          </h3>
                          <input
                            name="teamsize"
                            type="radio"
                            className="form-checkbox relative hidden z-10 peer"
                          />
                          <span className="rounded-lg border border-grey/20 peer-checked:border-grey absolute top-0 left-0 z-0 w-full h-full"></span>
                        </label>
                      </div>
                      <div className="relative">
                        <label className="flex cursor-pointer rounded-lg border border-grey/20 bg-white justify-between items-start gap-4 py-1.5 px-2.5 text-center">
                          <h3 className="font-semibold text-lg relative z-10 mx-auto">
                            Є
                          </h3>
                          <input
                            name="teamsize"
                            type="radio"
                            className="form-checkbox relative hidden z-10 peer"
                          />
                          <span className="rounded-lg border border-grey/20 peer-checked:border-grey absolute top-0 left-0 z-0 w-full h-full"></span>
                        </label>
                      </div>
                      <div className="relative">
                        <label className="flex cursor-pointer rounded-lg border border-grey/20 bg-white justify-between items-start gap-4 py-1.5 px-2.5 text-center">
                          <h3 className="font-semibold text-lg relative z-10 mx-auto">
                            £
                          </h3>
                          <input
                            name="teamsize"
                            type="radio"
                            className="form-checkbox relative hidden z-10 peer"
                          />
                          <span className="rounded-lg border border-grey/20 peer-checked:border-grey absolute top-0 left-0 z-0 w-full h-full"></span>
                        </label>
                      </div>
                      <div className="relative">
                        <label className="flex cursor-pointer rounded-lg border border-grey/20 bg-white justify-between items-start gap-4 py-1.5 px-2.5 text-center">
                          <h3 className="font-semibold text-lg relative z-10 mx-auto">
                            %
                          </h3>
                          <input
                            name="teamsize"
                            type="radio"
                            className="form-checkbox relative hidden z-10 peer"
                          />
                          <span className="rounded-lg border border-grey/20 peer-checked:border-grey absolute top-0 left-0 z-0 w-full h-full"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <p className="text-sm mb-2 font-semibold">Data Setting</p>
                    <div className="flex items-center p-1.5 gap-3">
                      <input
                        id="teams"
                        type="checkbox"
                        className="w-[18px] h-[18px] text-accent bg-white border-grey/20 rounded focus:ring-0 focus:outline-0 focus:outline-offset-0 focus:ring-offset-0"
                      />
                      <label htmlFor="teams" className="text-black text-base">
                        Compare with past data
                      </label>
                    </div>
                  </div>
                  <div className="">
                    <p className="text-sm mb-2 font-semibold">Value Unit</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-2">
                      <div>
                      <div className="relative"  >
                        <label className="flex cursor-pointer rounded-md border border-grey/20 bg-white justify-between items-start gap-4 p-1.5 text-center"  >
                          <div className="h-12 w-4/12 bg-grey/20 rounded-md"></div>
                          <input
                            name="teamsize"
                            type="radio"
                            className="form-checkbox relative hidden z-10 peer"
                          />
                          <span className="rounded-lg border border-grey/20 peer-checked:border-grey absolute top-0 left-0 z-0 w-full h-full"></span>
                        </label>
                      </div>
                      <p className="text-sm mt-1">Small</p>
                      </div>
                      <div>
                      <div className="relative" >
                        <label className="flex cursor-pointer rounded-md border border-grey/20 bg-white justify-between items-start gap-4 p-1.5 text-center">
                          <div className="h-12 w-6/12 bg-grey/20 rounded-md"></div>
                          <input
                            name="teamsize"
                            type="radio"
                            className="form-checkbox relative hidden z-10 peer"
                          />
                          <span className="rounded-lg border border-grey/20 peer-checked:border-grey absolute top-0 left-0 z-0 w-full h-full"></span>
                        </label>
                      </div>
                      <p className="text-sm mt-1">Medium</p>
                      </div>
                      <div>
                      <div className="relative" >
                        <label className="flex cursor-pointer rounded-md border border-grey/20 bg-white justify-between items-start gap-4 p-1.5 text-center">
                          <div className="h-12 w-full bg-grey/20 rounded-md"></div>
                          <input
                            name="teamsize"
                            type="radio"
                            className="form-checkbox relative hidden z-10 peer"
                          />
                          <span className="rounded-lg border border-grey/20 peer-checked:border-grey absolute top-0 left-0 z-0 w-full h-full"></span>
                        </label>
                      </div>
                      <p className="text-sm mt-1">Large</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>}
              {/* <div className="hidden">
                <p className="mb-4 text-base font-semibold">Numbers</p>
                <div className="grid grid-flow-row gap-5">
                  <div className="">
                    <p className="text-sm mb-2 font-semibold">Widget Name</p>
                    <input
                      type="text"
                      className="form-input px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md"
                    />
                  </div>
                  <div className="">
                    <p className="text-sm mb-2 font-semibold">Value Source</p>
                    <select className="form-select px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md">
                      <option>Deals</option>
                      <option>Deals</option>
                      <option>Deals</option>
                      <option>Deals</option>
                    </select>
                  </div>
                  <div className="">
                    <p className="text-sm mb-2 font-semibold">Value Type</p>
                    <select className="form-select px-3 py-2 w-full border-grey/50 focus:ring-0 focus:border-grey text-base text-black rounded-md">
                      <option>Actule Deals Value</option>
                      <option>Actule Deals Value</option>
                      <option>Actule Deals Value</option>
                      <option>Actule Deals Value</option>
                    </select>
                  </div>
                  <div className="">
                    <p className="text-sm mb-2 font-semibold">Value Unit</p>
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-2">
                      <div className="relative">
                        <label className="flex cursor-pointer rounded-lg border border-grey/20 bg-white justify-between items-start gap-4 py-1.5 px-2.5 text-center">
                          <h3 className="font-semibold text-lg relative z-10 mx-auto">
                            $
                          </h3>
                          <input
                            name="teamsize"
                            type="radio"
                            className="form-checkbox relative hidden z-10 peer"
                          />
                          <span className="rounded-lg border border-grey/20 peer-checked:border-grey absolute top-0 left-0 z-0 w-full h-full"></span>
                        </label>
                      </div>
                      <div className="relative">
                        <label className="flex cursor-pointer rounded-lg border border-grey/20 bg-white justify-between items-start gap-4 py-1.5 px-2.5 text-center">
                          <h3 className="font-semibold text-lg relative z-10 mx-auto">
                            Є
                          </h3>
                          <input
                            name="teamsize"
                            type="radio"
                            className="form-checkbox relative hidden z-10 peer"
                          />
                          <span className="rounded-lg border border-grey/20 peer-checked:border-grey absolute top-0 left-0 z-0 w-full h-full"></span>
                        </label>
                      </div>
                      <div className="relative">
                        <label className="flex cursor-pointer rounded-lg border border-grey/20 bg-white justify-between items-start gap-4 py-1.5 px-2.5 text-center">
                          <h3 className="font-semibold text-lg relative z-10 mx-auto">
                            £
                          </h3>
                          <input
                            name="teamsize"
                            type="radio"
                            className="form-checkbox relative hidden z-10 peer"
                          />
                          <span className="rounded-lg border border-grey/20 peer-checked:border-grey absolute top-0 left-0 z-0 w-full h-full"></span>
                        </label>
                      </div>
                      <div className="relative">
                        <label className="flex cursor-pointer rounded-lg border border-grey/20 bg-white justify-between items-start gap-4 py-1.5 px-2.5 text-center">
                          <h3 className="font-semibold text-lg relative z-10 mx-auto">
                            %
                          </h3>
                          <input
                            name="teamsize"
                            type="radio"
                            className="form-checkbox relative hidden z-10 peer"
                          />
                          <span className="rounded-lg border border-grey/20 peer-checked:border-grey absolute top-0 left-0 z-0 w-full h-full"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <p className="text-sm mb-2 font-semibold">Data Setting</p>
                    <div className="flex items-center p-1.5 gap-3">
                      <input
                        id="teams"
                        type="checkbox"
                        className="w-[18px] h-[18px] text-accent bg-white border-grey/20 rounded focus:ring-0 focus:outline-0 focus:outline-offset-0 focus:ring-offset-0"
                      />
                      <label htmlFor="teams" className="text-black text-base">
                        Compare with past data
                      </label>
                    </div>
                  </div>
                  <div className="">
                    <p className="text-sm mb-2 font-semibold">Value Unit</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-2">
                      <div className="relative">
                        <label className="flex cursor-pointer rounded-md border border-grey/20 bg-white justify-between items-start gap-4 p-1.5 text-center">
                          <div className="h-12 w-4/12 bg-grey/20 rounded-md"></div>
                          <input
                            name="teamsize"
                            type="radio"
                            className="form-checkbox relative hidden z-10 peer"
                          />
                          <span className="rounded-lg border border-grey/20 peer-checked:border-grey absolute top-0 left-0 z-0 w-full h-full"></span>
                        </label>
                      </div>
                      <div className="relative">
                        <label className="flex cursor-pointer rounded-md border border-grey/20 bg-white justify-between items-start gap-4 p-1.5 text-center">
                          <div className="h-12 w-6/12 bg-grey/20 rounded-md"></div>
                          <input
                            name="teamsize"
                            type="radio"
                            className="form-checkbox relative hidden z-10 peer"
                          />
                          <span className="rounded-lg border border-grey/20 peer-checked:border-grey absolute top-0 left-0 z-0 w-full h-full"></span>
                        </label>
                      </div>
                      <div className="relative">
                        <label className="flex cursor-pointer rounded-md border border-grey/20 bg-white justify-between items-start gap-4 p-1.5 text-center">
                          <div className="h-12 w-full bg-grey/20 rounded-md"></div>
                          <input
                            name="teamsize"
                            type="radio"
                            className="form-checkbox relative hidden z-10 peer"
                          />
                          <span className="rounded-lg border border-grey/20 peer-checked:border-grey absolute top-0 left-0 z-0 w-full h-full"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
           
          </div>  
          <div className="w-full flex-1 bg-grey/10 min-h-[calc(100vh-130px)] overflow-y-auto p-4 relative" onClick={()=>{SetBoxId(1)}}>
            <div className="grid grid-cols-12 gap-4 lg:gap-6 absolute top-0 left-0 h-full w-full p-6">
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
              <div className="h-8 lg:h-16 2xl:h-24 bg-accent/10"></div>
            </div>
            <Grid  SetBoxId={demo} />
          </div>
        </div>
      </div>
    </DndProvider>
  );
});
export default Maindashboard;
