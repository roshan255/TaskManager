import { useEffect, useState } from "react";
import Card from "../components/Card";
import apiClient from "../services/api-client";
import { useParams } from "react-router-dom";

function Edit() {
  const [task, setTask] = useState("");
  const params = useParams();
  useEffect(() => {
    apiClient
      .get(`/${params.id}`)
      .then((res) => {
        setTask(res.data.task.task);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Card cardName="Edit task">
        <input placeholder={task}></input>
        <button className="btn btn-primary">submit</button>
      </Card>
    </div>
  );
}

export default Edit;
