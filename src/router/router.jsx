import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// layout
import MainLayout from "../layout/MainLayout";
import CategoriesLayout from "../layout/CategoriesLayout";

// pages
import Home from "../pages/Home";
import Categoris from "../pages/Categoris";
import Trash from "../pages/Trash";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="categories" element={<CategoriesLayout />}>
          <Route index element={<Categoris />} />
          <Route path=":name" element={<Categoris />} />
        </Route>
        <Route path="trash" element={<Trash />} />
      </Route>
    </Route>,
  ),
);
