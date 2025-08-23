import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import dynamic from "next/dynamic";
import Input from "./Input";
import Answer from "./Answer";

const Question = dynamic(() => import('./Question'), { ssr: false });

export default function Section({ data, onSubmit }) {
  return (
    <div className="flex flex-col bg-[#f2f2f3] rounded-lg p-[15px] w-5/6 gap-4">
      <SortableContext items={data} strategy={verticalListSortingStrategy}>
        <h3 className="font-bold">Section 1</h3>
        <Input onSubmit={onSubmit} />
        {data.map((question) => (
          <Question key={question.id} title={question.title} id={question.id}>
            <SortableContext items={question.answer.map((i) => i.id)}>
              {question.answer.map((ans) => (
                <Answer key={ans.id} title={ans.title} id={ans.id} />
              ))}
            </SortableContext>
            <Input onSubmit={onSubmit} />
          </Question>
        ))}
      </SortableContext>
    </div>
  );
};