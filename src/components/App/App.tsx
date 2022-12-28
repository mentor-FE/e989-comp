import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import "./App.css";
import Home from "./../Pages/Home";
import CheckApplication from "../Pages/CheckApplication";
import WarrantyRepair from "../Pages/WarrantyRepair";
import Contacts from "../Pages/Contacts";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/checkapplication", element: <CheckApplication /> },
    { path: "/Warrantyrepair", element: <WarrantyRepair /> },
    { path: "/contacts", element: <Contacts /> },
  ]);
  return routes;
}

function AppWrapper () {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
