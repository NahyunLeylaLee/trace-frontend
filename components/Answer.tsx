import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function Answer({ id, title }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id, data: { type: 'answer' } });
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
      className="bg-[#f2f2f3] w-full flex flex-row gap-4 justify-between p-2 rounded-lg "
    >
      <input className="rounded-md items-center w-full p-2" type="text" value={title} readOnly />
      <button
        className="border p-2 text-xs rounded-xl shadow-lg hover:shadow-xl"
        {...listeners}
      >
        <img src='../../drag.png' className='w-3 h-3'></img>
      </button>
    </div>
  );
}