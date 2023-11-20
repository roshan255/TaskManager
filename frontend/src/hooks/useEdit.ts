import { useEffect, useState } from "react";
import taskServices from "../services/task-services";

function useEdit(id: string) {
  const [task, setTask] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const handleGetTask = (id: string) => {
    taskServices
      .getOne(id)
      .then((res) => {
        setTask(res.data.task.task);
        setIsCompleted(res.data.task.completed);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleGetTask(id);
  }, []);
  return { task, isCompleted, setTask, setIsCompleted };
}

export default useEdit;
