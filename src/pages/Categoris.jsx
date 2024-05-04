import { CiFilter } from "react-icons/ci";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import CardNotes from "../components/CardNotes";
import ContentNotes from "../components/ContentNotes";
import { useState } from "react";
import AddNote from "../components/addNote";

export default function Categoris() {
  const [isAddNote, setIsAddNote] = useState(false);

  return (
    <div className="flex items-start justify-between gap-5 p-5 text-gray-font xl:justify-center ">
      <div className=" max-w-96">
        <h1 className="font-semiBold mb-5 text-2xl text-white-font">General</h1>

        <div className="mb-5 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-sm">42 Notes</span>
            <div className="flex items-center gap-2">
              <button>
                <CiFilter />
              </button>
              <button>
                <PiDotsThreeOutlineVerticalLight />
              </button>
            </div>
          </div>

          <div className="flex items-center rounded-md bg-dark-primary px-4 py-2">
            <input
              type="text "
              className="w-full bg-dark-primary outline-none"
              placeholder="search notes..."
            />
            <IoSearchOutline />
          </div>

          <div>
            <button
              onClick={() => setIsAddNote(true)}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-blue py-2 font-semibold text-white-font duration-75 hover:opacity-95 active:scale-95"
            >
              <GoPlus /> <span>ADD NOTE</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col  gap-2 border-t  border-t-dark-tertiary py-3">
          <CardNotes />
          <CardNotes />
          <CardNotes />
          <CardNotes />
          <CardNotes />
        </div>
      </div>

      <div className="sticky top-5 w-full xl:w-[700px]">
        <ContentNotes />
      </div>

      {isAddNote && <AddNote close={() => setIsAddNote(false)} />}
    </div>
  );
}
