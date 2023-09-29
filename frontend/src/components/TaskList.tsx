interface Props {
  tasks: string[];
  onDelete: (index: number) => void;
  onEdit: (index: number) => void;
}

function TaskList({ tasks, onDelete, onEdit }: Props) {
  return (
    <ol>
      {tasks.map((task, index) => (
        <li key={index}>
          <div>
            <h4>{task}</h4>
            <button className="btn btn-secondary" onClick={() => onEdit(index)}>
              Edit
            </button>
            <button className="btn btn-danger" onClick={() => onDelete(index)}>
              delete
            </button>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default TaskList;
