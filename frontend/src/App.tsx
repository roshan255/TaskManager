import Card from "./components/Card";
import TaskList from "./components/TaskList";
import useTask from "./hooks/useTask";

function App() {
  const { taskList, error, handleCreate, handleDelete, handleEdit } = useTask();

  var inputValue = "";

  return (
    <div>
      <Card cardName="Enter the task">
        <input
          placeholder="Enter your task"
          onChange={(event) => {
            inputValue = event.target.value;
          }}
        ></input>
        <button
          className="btn btn-primary"
          onClick={() => {
            handleCreate(inputValue);
          }}
        >
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
