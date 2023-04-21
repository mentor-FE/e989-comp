import { useRoutes } from "react-router-dom";
import "./App.css";
import Home from "./../Pages/Home";
import Layout from "../Layout/Layout";
import R7 from "../Pages/R7";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Layout />, children: [
      { path: "/", element: <Home /> },
      { path: "/r7", element: <R7 /> },
    ] },
  ]);
  return (
    <div>
        {routes}
    </div>
  );
}

export default App;
