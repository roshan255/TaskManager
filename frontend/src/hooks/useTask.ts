import { useEffect, useState, ChangeEvent } from "react";
import taskServices from "../services/task-services";

export interface taskData {
  id: string;
  task: string;
  completed: boolean;
}

interface RequestStatus {
  errorMessage: string;
  successMessage: string;
}

const useTask = () => {
  const [taskList, setTaskList] = useState<taskData[]>([]);
  const [reqStatus, setReqStatus] = useState<RequestStatus>({
    errorMessage: "",
    successMessage: "",
  });
  const [inputValue, setInputValue] = useState("");

  const handleGetTasks = () => {
    taskServices
      .getAll()
      .then((res) => {
        setTaskList(res.data);
      })
      .catch((err) => setReqStatus(err.message));
  };

  const handleCreate = async () => {
    if (!inputValue) {
      setReqStatus({ ...reqStatus, errorMessage: "Enter a task!" });
      return;
    }

    await taskServices
      .createTask(inputValue)
      .then((res) => {
        console.log(res);
        setReqStatus({
          successMessage: "Successfully created!!",
          errorMessage: "",
        });
      })
      .catch((err) =>
        setReqStatus({ successMessage: "", errorMessage: err.message })
      );
    setInputValue("");
    handleGetTasks();
  };

  const handleDelete = async (delId: string) => {
    await taskServices
      .deleteTask(delId)
      .then((res) => {
        console.log(res);
        setReqStatus({
          successMessage: "Successfully deleted!!",
          errorMessage: "",
        });
      })
      .catch((err) => {
        setReqStatus({ successMessage: "", errorMessage: err.message });
      });
    handleGetTasks();
  };

  const handleEdit = (Id: string) => {
    console.log(Id);
    console.log(taskList);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setReqStatus({ successMessage: "", errorMessage: "" });
    setInputValue(event.target.value);
  };

  useEffect(() => {
    handleGetTasks();
  }, []);

  return {
    inputValue,
    taskList,
    reqStatus,
    handleChange,
    handleCreate,
    handleDelete,
    handleEdit,
  };
};

export default useTask;
