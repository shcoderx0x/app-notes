// icons
import { useState } from "react";
import { GoPlus, GoTrash } from "react-icons/go";
import { NavLink } from "react-router-dom";

// data dumys
const categories = [
  {
    name: "Business",
    amount: 23,
  },
  {
    name: "Design",
    amount: 17,
  },
  {
    name: "General",
    amount: 42,
  },
  {
    name: "Journal",
    amount: 16,
  },
  {
    name: "Personal",
    amount: 22,
  },
  {
    name: "Programing",
    amount: 35,
  },
];

const trash = [
  {
    name: "Business",
    amount: 23,
  },
  {
    name: "Design",
    amount: 17,
  },
];

export default function Sidebar() {
  const [categoriesShow, setCategoriesShow] = useState(true);
  const [trashShow, setTrashShow] = useState(false);

  return (
    <div className="bg-dark-primary text-gray-font sticky top-0 h-screen min-w-60 p-4">
      <div>
        <div className="mb-10 flex items-center gap-3">
          <div className="bg-gray-font h-10 w-10 rounded-full"></div>
          <span>sagan notes</span>
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <div className=" flex items-center justify-between">
              <button
                className={`${
                  categoriesShow
                    ? "text-white-font"
                    : "text-gray-font hover:text-white-font"
                } text-lg`}
                onClick={() => {
                  setCategoriesShow(!categoriesShow);
                }}
              >
                CATEGORIES
              </button>

              <button className="text-xl">
                <GoPlus />
              </button>
            </div>

            {categoriesShow && (
              <div className="mt-3 flex flex-col">
                {categories.map((item) => (
                  <NavLink
                    key={item.name}
                    to={`categories/${item.name}`}
                    className="hover:bg-dark-tertiary  rounded-md px-2 py-2"
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.name}</span> <span>{item.amount}</span>
                    </div>
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between">
              <button
                className={`${
                  trashShow
                    ? "text-white-font"
                    : "text-gray-font hover:text-white-font"
                } text-lg`}
                onClick={() => setTrashShow(!trashShow)}
              >
                TRASH
              </button>

              <button className="text-xl">
                <GoTrash />
              </button>
            </div>

            {trashShow && (
              <div className="mt-3 flex flex-col">
                {trash.map((item) => (
                  <NavLink
                    to={`trash/${item.name}`}
                    className="hover:bg-dark-tertiary flex items-center justify-between rounded-md px-2 py-2"
                  >
                    <span>{item.name}</span> <span>{item.amount}</span>
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
