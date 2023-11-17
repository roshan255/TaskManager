import { taskData } from "../hooks/useTask";
import { Link } from "react-router-dom";

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
          style={{ width: 500 }}
          key={task.id}
        >
          <div className="d-flex justify-content-between card-body">
            <h4 className="pe-2">{task.task}</h4>
            <div>
              <Link to={`/edit/${task.id}`} className="btn btn-secondary me-2">
                edit
              </Link>
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
