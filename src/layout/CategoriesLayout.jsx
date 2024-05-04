import { Outlet } from "react-router-dom";

export default function CategoriesLayout() {
  return (
    <div className=" w-full  ">
      <Outlet />
    </div>
  );
}
