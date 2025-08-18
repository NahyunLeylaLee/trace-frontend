"use client"

import Column from "@/components/column";
import Input from "@/components/input";
import { closestCorners, DndContext, DragEndEvent, KeyboardSensor, PointerSensor, TouchSensor, UniqueIdentifier, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { useState } from "react";

interface IQuestion {
  id: number,
  createdAt: string,
  updatedAt: string,
  title: string,
  description: string,
  age: number,
  term: number,
  order: number,
};

export default function Survey() {
  const [data, setData] = useState<IQuestion[]>([
    {
      "id": 1,
      "createdAt": "2025-08-12T00:27:46.814Z",
      "updatedAt": "2025-08-12T00:27:46.814Z",
      "title": "question 1",
      "description": null,
      "age": 2,
      "term": 1,
      "order": 1,
    },
    {
      "id": 2,
      "createdAt": "2025-08-12T00:27:46.814Z",
      "updatedAt": "2025-08-12T00:27:46.814Z",
      "title": "question 2",
      "description": null,
      "age": 3,
      "term": 2,
      "order": 2,
    },
    {
      "id": 3,
      "createdAt": "2025-08-12T00:27:46.814Z",
      "updatedAt": "2025-08-12T00:27:46.814Z",
      "title": "question 3",
      "description": null,
      "age": 4,
      "term": 3,
      "order": 3,
    }
  ]);

  const addQuestion = (title: string) => {
    setData(questions => [...questions, { id: data.length + 1, title, description: null, createdAt: "2025-08-12T00:27:46.814Z", updatedAt: "2025-08-12T00:27:46.814Z", age: 3, term: 3, order: 4 }])
  };

  const getDataPos = (id: UniqueIdentifier) => data.findIndex(question => question.id === id);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id === over.id) return;

    setData(data => {
      const originPos = getDataPos(active.id);
      const newPos = getDataPos(over.id);

      return arrayMove(data, originPos, newPos);
    });
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
      <h2>Create Survey</h2>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
      >
        <Input onSubmit={addQuestion} />
        <Column data={data} />
      </DndContext>
    </div>
  );
}