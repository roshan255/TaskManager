import { useEffect, useState } from "react";
import Card from "../components/Card";
import apiClient from "../services/api-client";
import { useParams } from "react-router-dom";

function Edit() {
  const [task, setTask] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const params = useParams();
  useEffect(() => {
    apiClient
      .get(`/${params.id}`)
      .then((res) => {
        setTask(res.data.task.task);
        setIsCompleted(res.data.task.completed);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Card cardName="Edit task">
        <p>Id : {params.id}</p>
        <input placeholder={task} className="form-control"></input>
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
            <button className="btn btn-primary" onClick={() => console.log()}>
              submit
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Edit;
