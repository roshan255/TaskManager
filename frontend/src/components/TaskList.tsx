import { taskData } from "../hooks/useTask";

interface Props {
  taskList: taskData[];
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

function TaskList({ taskList, onDelete, onEdit }: Props) {
  return (
    <div>
      {taskList.map((task) => (
        <div
          className="card shadow-lg mb-3 bg-body-tertiary rounded"
          style={{ width: 550 }}
        >
          <div
            className="d-flex justify-content-between card-body"
            key={task.id}
          >
            <h4 className="pe-2">{task.task}</h4>
            <div>
              <button
                className="btn btn-secondary me-2"
                onClick={() => onEdit(task.id)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(task.id)}
              >
                delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
