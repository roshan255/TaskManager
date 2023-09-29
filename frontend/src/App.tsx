import { useEffect, useState } from "react";
import Card from "./components/Card";
import TaskList from "./components/TaskList";
import axios from "axios";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [taskList, setTaskList] = useState<string[]>([]);
  const [error, setError] = useState("");
  console.log("hi there");

  const handleCreate = () => {
    if (!inputValue) {
      setError("Enter a task!");
      return;
    }

    axios
      .post("http://localhost:5000/api/tasks", { task: inputValue })
      .then((res) => {
        console.log(res);
        setError("");
      })
      .catch((err) => setError(err.message));
    setTaskList([...taskList, inputValue]);
  };

  const handleDelete = (delIndex: number) => {
    axios
      .delete("http://localhost:5000/api/tasks", {
        params: { id: delIndex },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        setError(err.message);
      });

    setTaskList(
      taskList.filter((item, index) => {
        console.log(`${item} is deleted form the tasks`);
        return index !== delIndex;
      })
    );
  };

  const handleEdit = (index: number) => {
    console.log(index);
  };

  useEffect(() => {
    axios.get("http://localhost:5000/api/tasks").then((res) => {
      setTaskList(res.data.tasks);
    });
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
          tasks={taskList}
        />
      </div>
    </div>
  );
}

export default App;
