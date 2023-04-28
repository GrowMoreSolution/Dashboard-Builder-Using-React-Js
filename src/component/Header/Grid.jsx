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

const ResponsiveGridLayout = WidthProvider(Responsive);
export default function Grid() {
  const layouts = {
    lg: [{ i: "a", x: 0, y: 0, w: 1, h: 2, data: 1 }],
  };

  const [layout, setLayout] = useState(layouts);

  const handleDrop = (item, monitor) => {
    const dropPosition = monitor.getClientOffset();
    const dropArea = monitor.getSourceClientOffset();
    const x = Math.floor((dropPosition.x - dropArea.x) / 100);
    const y = Math.floor((dropPosition.y - dropArea.y) / 100);
    const currentTime = Date.now();
    const timeString = new Date(currentTime).toLocaleString();
    const newItem = {
      i: timeString,
      data: item.box.id,
      x,
      y,
      w: 1,
      h: 1,
    };
    // const Item = [  ...layouts.lg , ...newItem  ]
   
    const newLayouts = {
      lg: [...layouts.lg, newItem],
    };
    setLayout(newLayouts);
    // console.log(layout);
    return;
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
        cols={{ lg: 4, md: 3, sm: 2, xs: 1, xxs: 1 }}
        rowHeight={60}
      >

        {layout.lg.map((item) => {
          

          return (
            <div key={item.i}>
              {item.data === 1 ? (
                
                <Numbers />

              ) : item.data === 2 ? (
                
                <ChartGrid /> 
               
              ) : item.data === 3 ? (
                <Simpledata />
                )
                : item.data === 4 ? (
                  <Calender />
                  )
                  : item.data === 5 ? (
                    <Charteithtext/>
                    )
                    : item.data === 6 ? (
                      <Emailreport/>
                      ):<Numbers/>}
            </div>
          );
        })}
      </ResponsiveGridLayout>
    </div>
  );
}
// function Widget({ id, backgroundColor }) {
//   return (
//     <div style={{ width: "100%", height: "100%", backgroundColor }}>{id}</div>
//   );
// }
