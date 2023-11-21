import apiClient from "./api-client";

class TaskServices {
  getAll() {
    return apiClient.get("/");
  }

  getOne(id: string) {
    return apiClient.get(`${id}`);
  }

  createTask(inputValue: string) {
    return apiClient.post("/", { task: inputValue });
  }

  updateTask(upId: string, task: string, isCompleted: boolean) {
    return apiClient.patch(`/${upId}`, { task: task, completed: isCompleted });
  }

  deleteTask(delId: string) {
    return apiClient.delete(`/${delId}`);
  }
}

export default new TaskServices();
