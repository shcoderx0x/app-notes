import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  return (
    <div className="bg-dark-secondary font-poppins flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}
