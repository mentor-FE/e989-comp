import { useRoutes } from "react-router-dom";
import "./App.css";
import Home from "./../Pages/Home";
import Layout from "../Layout/Layout";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Layout />, children: [
      { path: "/", element: <Home /> },
    ] },
  ]);
  return (
    <div>
        {routes}
    </div>
  );
}

export default App;
