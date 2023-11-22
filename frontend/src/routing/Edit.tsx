import Card from "../components/Card";
import { Link, useParams } from "react-router-dom";
import useEdit from "../hooks/useEdit";

function Edit() {
  const { id } = useParams();
  const { task, isCompleted, setTask, setIsCompleted, handleEdit } = useEdit(
    id ? id : ""
  );

  return (
    <div>
      <Card cardName="Edit task">
        <p>Id : {id}</p>
        <input
          placeholder={task}
          value={task}
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
              onClick={() => {
                handleEdit(id ? id : "", task, isCompleted);
                console.log(task, isCompleted);
                setTask("");
              }}
            >
              submit
            </button>
          </div>
        </div>
      </Card>
      <div className="d-flex justify-content-center m-5">
        <Link to="/" className="btn btn-dark">
          Go to tasks
        </Link>
      </div>
    </div>
  );
}

export default Edit;
