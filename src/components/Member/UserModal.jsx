import React from "react";
import { NewsStream } from "../../Context/Context";
import { BiEdit } from "react-icons/bi";
import { FaUser, FaAd, FaBinoculars, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";
import { secretEmail } from "../../utils/helper";

export default function UserModal({ setModal }) {
  const { currentUser } = NewsStream();
  const userModal = [
    {
      title: "Profile",
      icon: <FaUser />,
      path: `/profile/${currentUser?.uid}`,
    },
    {
      title: "Menu 1",
      icon: <FaAd />,
      path: `/library`,
    },
    {
      title: "Menu 2",
      icon: <FaBinoculars />,
      path: `/stories`,
    },
    {
      title: "Menu 3",
      icon: <FaChartLine />,
      path: `/stats`,
    },
  ];

  return (
    <section className="absolute w-[18rem] p-6 bg-white right-0 top-[100%] shadows rounded-md z-50 text-gray-500">
      <Link to="/write" className="flex md:hidden items-center gap-1 text-gray-500">
        <span className="text-3xl">
          <BiEdit />
        </span>
        <span className="text-sm mt-1">Write</span>
      </Link>
      <div className="flex flex-col gap-5 border-b border-gray-300 pb-5">
        {userModal.map((link, index) => (
          <Link
            onClick={() => setModal(false)}
            className="flex items-center gap-2 text-gray-500 hover:text-green-pastel-500"
            key={index}
            to={link.path}
          >
            <span className="text-2xl">{link.icon}</span>
            <h2 className="text-md">{link.title}</h2>
          </Link>
        ))}
      </div>
      <button className="flex flex-col pt-5 cursor-pointer hover:text-green-pastel-500">
        Sign Out
      </button>
      <span>{secretEmail(currentUser?.email)}</span>
    </section>
  );
}
