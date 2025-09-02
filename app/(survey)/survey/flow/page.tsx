"use client"

import { closestCorners, DndContext, DragEndEvent, KeyboardSensor, PointerSensor, TouchSensor, UniqueIdentifier, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { useState } from "react";
import Section from "@/components/Section";

interface IQuestion {
  id: UniqueIdentifier,
  createdAt: string,
  updatedAt: string,
  title: string,
  description: string,
  age: number,
  term: number,
  order: number,
  answer: IAnswer[],
};

interface IAnswer {
  id: UniqueIdentifier,
  title: string,
}

export default function Flow() {
  const [data, setData] = useState<IQuestion[]>([
    {
      "id": "question-1",
      "createdAt": "2025-08-12T00:27:46.814Z",
      "updatedAt": "2025-08-12T00:27:46.814Z",
      "title": "question 1",
      "description": null,
      "age": 2,
      "term": 1,
      "order": 1,
      "answer": [
        { id: "answer-1", title: 'Answer 1' },
        { id: "answer-2", title: 'Answer 2' },
        { id: "answer-3", title: 'Answer 3' },
        { id: "answer-4", title: 'Answer 4' },
        { id: "answer-5", title: 'Answer 5' },
      ]
    },
    {
      "id": "question-2",
      "createdAt": "2025-08-12T00:27:46.814Z",
      "updatedAt": "2025-08-12T00:27:46.814Z",
      "title": "question 2",
      "description": null,
      "age": 3,
      "term": 2,
      "order": 2,
      "answer": [
        { id: "answer-21", title: 'Answer 1' },
        { id: "answer-22", title: 'Answer 2' },
        { id: "answer-23", title: 'Answer 3' },
        { id: "answer-24", title: 'Answer 4' },
        { id: "answer-25", title: 'Answer 5' },
      ]
    },
    {
      "id": "question-3",
      "createdAt": "2025-08-12T00:27:46.814Z",
      "updatedAt": "2025-08-12T00:27:46.814Z",
      "title": "question 3",
      "description": null,
      "age": 4,
      "term": 3,
      "order": 3,
      "answer": [
        { id: "answer-31", title: 'Answer 1' },
        { id: "answer-32", title: 'Answer 2' },
        { id: "answer-33", title: 'Answer 3' },
        { id: "answer-34", title: 'Answer 4' },
        { id: "answer-35", title: 'Answer 5' },
      ]
    }
  ]);

  const addQuestion = (title: string) => {
    setData(questions => [...questions, { id: `question-${data.length + 1}`, title, description: null, createdAt: "2025-08-12T00:27:46.814Z", updatedAt: "2025-08-12T00:27:46.814Z", age: 3, term: 3, order: 4, answer: [{ id: `answer-${data.length + 1}1`, title: "answer 1" }] }])
  };

  // Find the value of the items
  function findValueOfItems(id: UniqueIdentifier | undefined, type: string) {
    if (type === 'question') {
      return data.find((q) => q.id === id);
    }
    if (type === 'answer') {
      return data.find((q) =>
        q.answer.find((ans) => ans.id === id),
      );
    }
  }

  // const getDataPos = (id: UniqueIdentifier) => data.findIndex(question => question.id === id);

  // Handling answer Sorting
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id === over.id) return;

    // Handling Question Sorting
    if (
      active.id.toString().includes('question') &&
      over?.id.toString().includes('question') &&
      active &&
      over &&
      active.id !== over.id
    ) {
      // Find the index of the active and over question
      const activeQuestionIndex = data.findIndex(
        (question) => question.id === active.id,
      );
      const overQuestionIndex = data.findIndex(
        (question) => question.id === over.id,
      );
      // Swap the active and over question
      let newItems = [...data];
      newItems = arrayMove(newItems, activeQuestionIndex, overQuestionIndex);
      setData(newItems);
    }

    // Handling Answer Sorting
    if (
      active.id.toString().includes('answer') &&
      over?.id.toString().includes('answer') &&
      active &&
      over &&
      active.id !== over.id
    ) {
      // Find the active and over container
      const activeQuestion = findValueOfItems(active.id, 'answer');
      const overQuestion = findValueOfItems(over.id, 'answer');

      // If the active or over container is not found, return
      if (!activeQuestion || !overQuestion) return;

      // Find the index of the active and over container
      const activeQuestionIndex = data.findIndex(
        (question) => question.id === activeQuestion.id,
      );
      const overQuestionIndex = data.findIndex(
        (question) => question.id === overQuestion.id,
      );
      // Find the index of the active and over item
      const activeAnswerIndex = activeQuestion.answer.findIndex(
        (ans) => ans.id === active.id,
      );
      const overitemIndex = overQuestion.answer.findIndex(
        (ans) => ans.id === over.id,
      );

      // In the same container
      if (activeQuestionIndex === overQuestionIndex) {
        let newItems = [...data];
        newItems[activeQuestionIndex].answer = arrayMove(
          newItems[activeQuestionIndex].answer,
          activeAnswerIndex,
          overitemIndex,
        );
        setData(newItems);
      } else {
        // In different containers
        let newItems = [...data];
        const [removeditem] = newItems[activeQuestionIndex].answer.splice(
          activeAnswerIndex,
          1,
        );
        newItems[overQuestionIndex].answer.splice(
          overitemIndex,
          0,
          removeditem,
        );
        setData(newItems);
      }


    }

      // setData(data => {
      //   const originPos = getDataPos(active.id);
      //   const newPos = getDataPos(over.id);

      //   return arrayMove(data, originPos, newPos);
      // });
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <div className="flex justify-center flex-col items-center">
      <h2 className="m-4 font-bold text-3xl">Create Survey</h2>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
      >
        {/* <Input onSubmit={addQuestion} /> */}
        <Section data={data} onSubmit={addQuestion} />
      </DndContext>
    </div>
  );
}