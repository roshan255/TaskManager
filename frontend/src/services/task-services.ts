import apiClient from "./api-client";

class TaskServices {
  getAll() {
    return apiClient.get("/");
  }

  createTask(inputValue: string) {
    return apiClient.post("/", { task: inputValue });
  }

  deleteTask(delId: string) {
    return apiClient.delete(`/${delId}`);
  }
}

export default new TaskServices();
