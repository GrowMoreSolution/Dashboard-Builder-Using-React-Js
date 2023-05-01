import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import ChartGrid from "../GridComponent/ChartGrid";
import Numbers from "../GridComponent/Numbers";
import Emailreport from "../GridComponent/Emailreport";
import Charteithtext from "../GridComponent/Charteithtext";
import { useDrop } from "react-dnd";
import { useState } from "react";
import Simpledata from "../GridComponent/Simpledata";
import Calender from "../GridComponent/Calender";
import Maindashboard from "./Maindashboard";

const ResponsiveGridLayout = WidthProvider(Responsive);
export default function Grid({SetBoxId}) {
  const layouts = {
    lg: [{ i: "a", x: 0, y: 0, w: 1, h: 2, data: 1 }],
  };

  const [layout, setLayout] = useState(layouts);
  

  const handleDrop = (item, monitor) => {
    const dropPosition = monitor.getClientOffset();
    const dropArea = monitor.getSourceClientOffset();
    const x = Math.floor((dropPosition.x - dropArea.x) / 100);
    const y = Math.floor((dropPosition.y - dropArea.y) / 60);
    const currentTime = Date.now();
    const timeString = new Date(currentTime).toLocaleString();
    const newItem = {
      i: timeString,
      data: item.box.id,
      x,
      y,
      w: 1,
      h: 6,
    };
  
    // Update layouts state with the new item added to the end of the array
    setLayout((prevLayouts) => {
      return {
        lg: [...prevLayouts.lg, newItem],
      };
    });
  };

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "widget-box",
    drop: handleDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div ref={drop}>
     
      <ResponsiveGridLayout
        className="layout"
        layouts={layout}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 4, md: 3, sm: 3, xs: 1, xxs: 1 }}
        // rowHeight={60}
      >
        {layout.lg.map((item,i) => {
          return (
          
            <div key={item.i}  className="group">
              <button   className="focus:border focus:border-blue-500 focus:rounded focus:!h-auto" >
              {item.data === 1 ? (
                <Numbers />
              ) : item.data === 2 ? (
                <ChartGrid />
              ) : item.data === 3 ? (
                <Simpledata />
              ) : item.data === 4 ? (
                <Calender />
              ) : item.data === 5 ? (
                <Charteithtext />
              ) : item.data === 6 ? (
                <Emailreport />
              ) : (
                null
              )}
              </button>
              <div className="group-focus-visible:block hidden">
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
            
          );
        })}
      </ResponsiveGridLayout>
      {/* <Maindashboard value={did} /> */}
    </div>
  );
}
// function Widget({ id, backgroundColor }) {
//   return (
//     <div style={{ width: "100%", height: "100%", backgroundColor }}>{id}</div>
//   );
// }
          {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-2">
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
                    </div> */}