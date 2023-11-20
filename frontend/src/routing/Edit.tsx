import Card from "../components/Card";
import { useParams } from "react-router-dom";
import useEdit from "../hooks/useEdit";

function Edit() {
  const params = useParams();
  const { task, isCompleted, setTask, setIsCompleted } = useEdit(
    params.id ? params.id : ""
  );

  return (
    <div>
      <Card cardName="Edit task">
        <p>Id : {params.id}</p>
        <input
          placeholder={task}
          className="form-control"
          onChange={(event) => {
            setTask(event.target.value);
          }}
        ></input>
        <div className="form-check form-switch mt-2 mb-2">
          <input
            className="form-check-input"
            type="checkbox"
            id="completed"
            checked={isCompleted}
            onChange={() => setIsCompleted(!isCompleted)}
          />
          <label className="form-check-label" htmlFor="completed">
            Completed task
          </label>
          <div style={{ float: "right" }}>
            <button
              className="btn btn-primary"
              onClick={() => console.log(task, isCompleted)}
            >
              submit
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Edit;
