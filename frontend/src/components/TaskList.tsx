interface Props {
  tasks: string[];
}

function TaskList({ tasks }: Props) {
  return (
    <ol>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ol>
  );
}

export default TaskList;
