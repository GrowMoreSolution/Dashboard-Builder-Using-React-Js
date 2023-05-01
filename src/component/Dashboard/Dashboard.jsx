import React,{useState} from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

export default function Dashboard() {
    const [DropDownRole, SetDropDownRole] = useState('');

  return (
    <>
      <div className="w-full h-full bg-white">
        <div className="flex items-start">
          <Sidebar value={0} />
          <div className="w-full flex-1">
            <div className="min-h-[calc(100vh-81px)] p-12">
              <h2 className="text-xl font-bold text-black mb-8">
                Dashboard Information
              </h2>
              <div className="mb-5">
                <label
                  htmlFor="first-name"
                  className="block text-sm text-black"
                >
                  Dashboard Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    placeholder="Please Enter Name"
                    id="first-name"
                    className="block w-[368px] rounded-md border border-grey/50 px-2 py-1.5 text-black shadow-sm focus:ring-0 focus:shadow-none placeholder:text-gray-400 text-sm leading-6"
                  />
                </div>
              </div>
              <div className="mb-5 dashboard">
                <p className="block text-sm text-black mb-2.5">
                  Who can see this Dashboard?
                </p>
                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="radio1"
                    type="radio"
                    name="radio"
                    className="hidden"
                  />
                  <label
                    htmlFor="radio1"
                    className="flex items-center cursor-pointer text-base"
                  >
                    <span className="w-5 h-5 inline-block mr-2 rounded-full border border-grey flex-no-shrink"></span>
                    Only Me
                  </label>
                </div>

                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="radio2"
                    type="radio"
                    name="radio"
                    className="hidden"
                    onChange={(e) => SetDropDownRole('')}
                  />
                  <label
                    htmlFor="radio2"
                    className="flex items-center cursor-pointer text-base"
                  >
                    <span className="w-5 h-5 inline-block mr-2 rounded-full border border-grey flex-no-shrink"></span>
                    Everyone
                  </label>
                </div>

                <div className="flex items-center mr-4 mb-3">
                  <input
                    id="radio3"
                    type="radio"
                    name="radio"
                    className="hidden"
                    checked={DropDownRole != '' }
                    onChange={(e) => SetDropDownRole('')}
                  />
                  <label
                    htmlFor="radio3"
                    className="flex items-center cursor-pointer text-base"
                  >
                    <span className="w-5 h-5 inline-block mr-2 rounded-full border border-grey flex-no-shrink"></span>
                    Specific Use, Team or role
                  </label>
                </div>
                <div className="flex ml-6">
                  <input
                    type="text"
                    value={DropDownRole}
                    onChange={(e) => SetDropDownRole(e.target.value)}
                    placeholder="Search Sider"
                    className="w-[250px] rounded-md border border-grey/50 border-r-0 px-2 py-1.5 text-black shadow-sm focus:ring-0 focus:border-grey/50 focus:shadow-none placeholder:text-gray-400 text-sm leading-6 rounded-r-none"
                  />
                  {/* <div className="bg-white text-light-grey flex justify-center items-center rounded-r-md px-2 font-semibold border border-l-0 border-grey/50 cursor-pointer">
                    Can Edit
                  </div> */}
                    
                  <select  className="w-[90px] px-2 text-light-grey  text-[#a6a7aa] text-sm flex justify-center items-center  rounded-r-md  border-l-0 border-grey/50 focus:border-grey/50 focus:ring-inset focus:ring-transparent" onChange={(e) => SetDropDownRole(e.target.value)}>
                    {/* <option value="">Can edit</option> */}
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="border-t border-grey/20 py-5 px-12 flex items-center justify-end gap-2">
              <button type="buttom" className="btn-white">
                Cancel
              </button>
              <Link className="header-brand btn-gray" to="/dashboard">
                Next
              </Link>

              {/* <button type='button' className='btn-gray'>Next</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
