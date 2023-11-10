import { taskData } from "../hooks/useTask";

interface Props {
  taskList: taskData[];
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

function TaskList({ taskList, onDelete, onEdit }: Props) {
  return (
    <ol className="list-group">
      {taskList.map((task) => (
        <li
          className="list-group-item d-flex align-items justify-content-between"
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
        </li>
      ))}
    </ol>
  );
}

export default TaskList;
