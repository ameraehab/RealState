import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar.jsx";
import "./layout.css";
function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
