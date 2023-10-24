import { taskData } from "../App.tsx";

interface Props {
  taskList: taskData[];
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

function TaskList({ taskList, onDelete, onEdit }: Props) {
  return (
    <ol>
      {taskList.map((task) => (
        <li key={task.id}>
          <h4>{task.task}</h4>
          <button className="btn btn-secondary" onClick={() => onEdit(task.id)}>
            Edit
          </button>
          <button className="btn btn-danger" onClick={() => onDelete(task.id)}>
            delete
          </button>
        </li>
      ))}
    </ol>
  );
}

export default TaskList;
