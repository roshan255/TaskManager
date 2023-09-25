import { useState } from "react";
import Card from "./components/Card";
import TaskList from "./components/TaskList";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [taskList, setTaskList] = useState<string[]>([]);
  const handleClick = () => {
    setTaskList([...taskList, inputValue]);
  };

  return (
    <div>
      <Card cardName="Enter the task">
        <input
          placeholder="Enter your task"
          onChange={(event) => setInputValue(event.target.value)}
        ></input>
        <button className="btn btn-primary" onClick={handleClick}>
          Add
        </button>
      </Card>
      <div>
        Output:
        <TaskList tasks={taskList} />
      </div>
    </div>
  );
}

export default App;
