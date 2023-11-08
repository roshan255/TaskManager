import { useEffect, useState } from "react";
import taskServices from "../services/task-services";

export interface taskData {
  id: string;
  task: string;
  completed: Boolean;
}

const useTask = () => {
  const [taskList, setTaskList] = useState<taskData[]>([]);
  const [error, setError] = useState("");

  const handleGetTasks = () => {
    taskServices
      .getAll()
      .then((res) => {
        setTaskList(res.data);
      })
      .catch((err) => setError(err.message));
  };

  const handleCreate = async (inputValue: string) => {
    if (!inputValue) {
      setError("Enter a task!");
      return;
    }

    await taskServices
      .createTask(inputValue)
      .then((res) => {
        console.log(res);
        setError("");
      })
      .catch((err) => setError(err.message));
    handleGetTasks();
  };

  const handleDelete = async (delId: string) => {
    await taskServices
      .deleteTask(delId)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        setError(err.message);
      });
    handleGetTasks();
  };

  const handleEdit = (Id: string) => {
    console.log(Id);
    console.log(taskList);
  };

  useEffect(() => {
    handleGetTasks();
  }, []);

  return {
    taskList,
    error,
    handleCreate,
    handleDelete,
    handleEdit,
  };
};

export default useTask;
