"use client"

import { Draggable } from "@/components/Draggable";
import { Droppable } from "@/components/Droppable";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";

export default function Survey() {
  const data = [
    {
      "id": 1,
      "createdAt": "2025-08-12T00:27:46.814Z",
      "updatedAt": "2025-08-12T00:27:46.814Z",
      "title": "test",
      "description": null,
      "age": 2,
      "term": 1,
      "isActive": true,
      "invalidAt": null,
      "order": 1,
      "IsMain": false,
      "IsBasic": false,
      "startSending": false
    },
    {
      "id": 2,
      "createdAt": "2025-08-12T00:27:46.814Z",
      "updatedAt": "2025-08-12T00:27:46.814Z",
      "title": "test2",
      "description": null,
      "age": 3,
      "term": 2,
      "isActive": true,
      "invalidAt": null,
      "order": 2,
      "IsMain": false,
      "IsBasic": false,
      "startSending": false
    },
    {
      "id": 3,
      "createdAt": "2025-08-12T00:27:46.814Z",
      "updatedAt": "2025-08-12T00:27:46.814Z",
      "title": "test3",
      "description": null,
      "age": 4,
      "term": 3,
      "isActive": true,
      "invalidAt": null,
      "order": 3,
      "IsMain": false,
      "IsBasic": false,
      "startSending": false
    }
  ];
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = (
    <Draggable>Drag me</Draggable>
  );
  const handleDragEnd = (event: DragEndEvent) => {
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true);
    }
  }
  return (
    <DndContext onDragEnd={handleDragEnd}>
      {!isDropped ? draggableMarkup : null}
      <Droppable>
        {isDropped ? draggableMarkup : 'Drop here'}
      </Droppable>
    </DndContext>
  );
}