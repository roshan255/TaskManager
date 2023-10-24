import { useEffect, useState } from "react";
import Card from "./components/Card";
import TaskList from "./components/TaskList";
import axios from "axios";

export interface taskData {
  id: string;
  task: string;
  completed: Boolean;
}

function App() {
  const [inputValue, setInputValue] = useState("");
  const [taskList, setTaskList] = useState<taskData[]>([]);
  const [error, setError] = useState("");

  const handleCreate = () => {
    if (!inputValue) {
      setError("Enter a task!");
      return;
    }

    axios
      .post("http://localhost:5000/api/v1/tasks", { task: inputValue })
      .then((res) => {
        console.log(res);
        setError("");
      })
      .catch((err) => setError(err.message));
    handleGetTasks();
  };

  const handleDelete = (delId: string) => {
    axios
      .delete(`http://localhost:5000/api/v1/tasks/${delId}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        setError(err.message);
      });

    setTaskList(
      taskList.filter((item) => {
        console.log(`${item} is deleted form the tasks`);
        return item.id !== delId;
      })
    );
  };

  const handleEdit = (Id: string) => {
    console.log(Id);
    console.log(taskList);
  };

  const handleGetTasks = () => {
    return axios
      .get<taskData[]>("http://localhost:5000/api/v1/tasks")
      .then((res) => {
        setTaskList(res.data);
      });
  };

  useEffect(() => {
    handleGetTasks();
  }, [error]);

  return (
    <div>
      <Card cardName="Enter the task">
        <input
          placeholder="Enter your task"
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        ></input>
        <button className="btn btn-primary" onClick={handleCreate}>
          Add
        </button>
        <p className="text-danger">{error}</p>
      </Card>
      <div>
        Output:
        <TaskList
          onDelete={handleDelete}
          onEdit={handleEdit}
          taskList={taskList}
        />
      </div>
    </div>
  );
}

export default App;
