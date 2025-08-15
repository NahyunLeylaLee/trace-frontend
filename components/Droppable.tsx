import React from 'react';
import { useDroppable } from '@dnd-kit/core';

export function Droppable(props: any) {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
  });
  const style = {
    color: isOver ? 'green' : undefined,
    border: '1px solid black',
    width: '300px',
    height: '300px'
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}