import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Edit from "./Edit";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/edit/:id", element: <Edit /> },
]);

export default router;
