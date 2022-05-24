import { useAppState } from "./AppStateContext";

import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";
import { ColumnContainer, ColumnTitle } from "./styles";

type ColumnProps = {
  text: string;
  index: number;
  id: string;
}

export const Column = ({text, index, id}: ColumnProps) => {
  const { state, dispatch } = useAppState();

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map(task => (
        <Card text={task.text} key={task.id}/>
      ))}
      <AddNewItem 
        toggleButtonText="+ Add another card" 
        onAdd={text => dispatch({type: "ADD_TASK", payload: {text, taskId: id}})} 
        dark
      />
    </ColumnContainer>
  )
}