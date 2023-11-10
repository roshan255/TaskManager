import Card from "./components/Card";
import TaskList from "./components/TaskList";
import useTask from "./hooks/useTask";

function App() {
  const {
    inputValue,
    taskList,
    reqStatus,
    handleChange,
    handleCreate,
    handleDelete,
    handleEdit,
  } = useTask();

  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <Card cardName="Enter the task">
        <div className="input-group">
          <input
            className="form-control"
            placeholder="Enter your task"
            value={inputValue}
            onChange={handleChange}
          ></input>
          <button className="btn btn-primary" onClick={handleCreate}>
            Add
          </button>
        </div>
        <p className="text-danger">{reqStatus.errorMessage}</p>
        <p className="text-success">{reqStatus.successMessage}</p>
      </Card>
      <div>
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
