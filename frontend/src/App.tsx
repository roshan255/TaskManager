import Card from "./components/Card";
import TaskList from "./components/TaskList";
import useTask from "./hooks/useTask";

function App() {
  const {
    inputValue,
    taskList,
    error,
    handleChange,
    handleCreate,
    handleDelete,
    handleEdit,
  } = useTask();

  return (
    <div className="">
      <Card cardName="Enter the task">
        <input
          placeholder="Enter your task"
          value={inputValue}
          onChange={handleChange}
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
