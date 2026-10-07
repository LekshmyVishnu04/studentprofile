import { createBrowserRouter } from "react-router-dom";
import Student from "./student";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    { path: "/student/:name", element: <Student /> },
]);
export default router;