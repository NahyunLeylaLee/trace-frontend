import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import dynamic from "next/dynamic";

const Question = dynamic(() => import('./question'), { ssr: false });

export default function Column({ data }) {
  return (
    <div style={{ backgroundColor: "#f2f2f3", borderRadius: "10px", padding: "15px", display: "flex", flexDirection: "column", gap: "15px", width: "80vw" }}>
      <SortableContext items={data} strategy={verticalListSortingStrategy}>
        <h3>Section 1</h3>
        {data.map((question) => (
          <Question key={question.id} title={question.title} id={question.id} />
        ))}
      </SortableContext>
    </div>
  );
};