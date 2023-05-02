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
export default function Grid({SetBoxId},{BoxSize}) {
  const layouts = {
    lg: [{ i: "a", x: 0, y: 0, w: 1, h: 2, data: 0 }],
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
      h:1
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
  const SetGrid = (a,b)=>{
    // var element = document.getElementById(b);
    // element.style.width = "80%";
    // document.getElementById("b").setAttribute("style","width:25%");
    if(a==1){
      document.getElementById(`wi-${b}`).style.width='25%';
    }
    else if(a==2){
      document.getElementById(`wi-${b}`).style.width='50%';
    }
    else if(a==3){
      document.getElementById(`wi-${b}`).style.width='100%';
    }
  }

  const Setdis = (b)=>{
    document.getElementById(`di-${b}`).style.display='block'
  }
  return (
    <div ref={drop}>
      <ResponsiveGridLayout
        className="layout"
        layouts={layout}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 1, md: 3, sm: 3, xs: 1, xxs: 1 }}
        rowHeight={60}
      >
        {layout.lg.map((item,i) => {
          return (
          
            <div key={item.i}  className="group !translate-x-0 !translate-y-0">
              <button  id={`wi-${i}`} className={`focus:border focus:border-blue-500 focus:rounded focus:!h-auto w-1/2 wid-${i}`} onClick={(e)=>{SetBoxId(e,2);Setdis(i)}}>
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
                <Numbers />
              )}
              </button>
              <div id={`di-${i}`} className="hidden" >
              <div className="grid grid-cols-1 sm:grid-cols-3 w-56 rounded-md gap-4 mb-2 bg-white p-2 mt-2 ">
                  <div>
                      <div className="relative">
                        <label className="flex cursor-pointer rounded-md border border-grey/20 bg-white justify-between items-start gap-4 text-center">
                          <div className="h-8 w-4/12 bg-grey/20 rounded-md"></div>
                          <input
                            name="teamsize"
                            type="radio"
                            className="form-checkbox relative hidden z-10 peer"
                          />
                          <span className="rounded-lg border border-grey/20 peer-checked:border-grey absolute top-0 left-0 z-0 w-full h-full"></span>
                        </label>
                        
                      </div>
                      <p className="text-sm mt-1" onClick={()=>{SetGrid(1,i)}}>Small</p>
                  </div>
                  <div>
                      <div className="relative">
                        <label className="flex cursor-pointer rounded-md border border-grey/20 bg-white justify-between items-start gap-4 text-center">
                          <div className="h-8 w-6/12 bg-grey/20 rounded-md"></div>
                          <input
                            name="teamsize"
                            type="radio"
                            className="form-checkbox relative hidden z-10 peer"
                          />
                          <span className="rounded-lg border border-grey/20 peer-checked:border-grey absolute top-0 left-0 z-0 w-full h-full"></span>
                        </label>
                      </div>
                      <p className="text-sm mt-1" onClick={()=>{SetGrid(2,i)}}>Medium</p>
                    </div>    
                      <div>
                      <div className="relative">
                        <label className="flex cursor-pointer rounded-md border border-grey/20 bg-white justify-between items-start gap-4 text-center">
                          <div className="h-8 w-full bg-grey/20 rounded-md"></div>
                          <input
                            name="teamsize"
                            type="radio"
                            className="form-checkbox relative hidden z-10 peer"
                          />
                          <span className="rounded-lg border border-grey/20 peer-checked:border-grey absolute top-0 left-0 z-0 w-full h-full"></span>
                        </label>
                        
                      </div>
                      <p className="text-sm mt-1" onClick={()=>{SetGrid(3,i)}}>Large</p>
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