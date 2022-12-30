import { useRoutes } from "react-router-dom";
import "./App.css";
import Home from "./../Pages/Home";
import CheckApplication from "../Pages/CheckApplication";
import WarrantyRepair from "../Pages/WarrantyRepair";
import Contacts from "../Pages/Contacts";
import Layout from "../Layout/Layout";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Layout />, children: [
      { path: "/", element: <Home /> },
      { path: "check-application", element: <CheckApplication /> },
      { path: "warranty-repair", element: <WarrantyRepair /> },
      { path: "contacts", element: <Contacts /> },
    ] },
  ]);
  return (
    <div>
        {routes}
    </div>
  );
}

export default App;
