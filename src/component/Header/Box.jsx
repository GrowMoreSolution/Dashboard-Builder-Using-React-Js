import { useDrag } from "react-dnd";

export const Box = function Box({ box }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "widget-box",
    item: { box },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div ref={drag} style={{ opacity: opacity }} data-testid={`box`}>
      {box.data}
    </div>
  );
};
