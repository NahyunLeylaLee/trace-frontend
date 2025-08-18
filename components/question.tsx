import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function Question({ id, title }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    display: "flex",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "rbga(0, 0, 0, 0.16) 0px 1px 4px",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    padding: "10px",
    gap: "20px",
    touchAction: "none",
    cursor: "pointer"
  };
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      <p>{title}</p>
    </div>
  );
};