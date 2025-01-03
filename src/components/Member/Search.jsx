import React from "react";
import Modal from "../../utils/Modal";
import { IoIosSearch } from "react-icons/io";

export default function Search({ modal, setModal }) {
  return (
    <>
      <Modal modal={modal} setModal={setModal}>
        <div
          className={`absolute sm:relative right-4 left-4 top-[4rem] sm:left-0 sm:top-0 ${
            modal ? "visible opacity-100" : "invisible sm:visible sm:opacity-100 opacity-0"
          }`}
        >
          <div className="flex items-center gap-1 bg-gray-100 px-2 rounded-full relative z-10">
            <span className="text-2xl text-gray-400">
              <IoIosSearch />
            </span>
            <input
              className="bg-transparent outline-none py-[0.7rem] text-sm w-full"
              type="text"
              placeholder="Search NewStream"
            />
          </div>
        </div>
      </Modal>
    </>
  );
}
