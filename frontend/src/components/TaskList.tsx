import { taskData } from "../hooks/useTask";
import { Link } from "react-router-dom";
import { FaTrash, FaRegCircleCheck, FaPenToSquare } from "react-icons/fa6";
interface Props {
  taskList: taskData[];
  onDelete: (id: string) => void;
}

function TaskList({ taskList, onDelete }: Props) {
  return (
    <div>
      {taskList.map((task) => (
        <div
          className="card shadow-lg mb-3 bg-body-tertiary rounded"
          style={{ width: 500 }}
          key={task.id}
        >
          <div className="d-flex justify-content-between card-body">
            <h4>
              {task.completed ? (
                <>
                  <FaRegCircleCheck className="text-success pe-2" />
                  <s>{task.task}</s>
                </>
              ) : (
                task.task
              )}
            </h4>
            <div>
              <Link to={`/edit/${task.id}`} className="btn">
                <FaPenToSquare className="text-secondary" />
              </Link>
              <button className="btn" onClick={() => onDelete(task.id)}>
                <FaTrash className="text-danger" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
