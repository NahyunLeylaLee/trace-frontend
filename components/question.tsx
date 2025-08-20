import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function Question({ id, title, children }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id, data: { type: 'question' } });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    touchAction: "none",
  };
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      style={style}
      className="flex bg-white rounded-lg items-center p-[10px] shadow-md flex-col"
    >
      <div className="flex justify-between w-full">
        <input value={title} className="w-full mr-2 p-2 rounded-lg" readOnly/>
        <button
          className="border p-2 text-xs rounded-xl shadow-lg hover:shadow-xl"
          {...listeners}
        >
          <img src='../../drag.png' className='w-3 h-3'></img>
        </button>
      </div>
      <div className="flex flex-col items-start w-full p-[10px] gap-4">
        {children}
      </div>
    </div>
  );
};