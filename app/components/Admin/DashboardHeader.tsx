"use client";
import { ThemeSwitcher } from "@/app/utils/ThemeSwitcher";
import { FC, useState } from "react";
import { IoIosNotifications } from "react-icons/io";

// type Props = {};

const DashboardHeader: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full flex items-center justify-end p-6 fixed top-5 right-0">
      <ThemeSwitcher />
      <div
        className="relative cursor-pointer m-2"
        onClick={() => setOpen(!open)}
      >
        <IoIosNotifications className="text-2xl cursor-pointer text-white" />
        <span className="absolute -top-2 -right-2 rounded-full flex items-center justify-center bg-[#3ccba0] w-[20px] h-[20px] text-[12px] ">
          3
        </span>
      </div>
      {open && (
        <div className="w-[350px] h-[50vh] bg-[#111C43] shadow-xl absolute top-16 z-10 rounded ">
          <h5 className="text-center text-[20px] fornt-Poppins text-white p-3 ">
            Notifications
          </h5>
          <div className="bg-[#2d3a4ea1] font-Poppins border-b border-b-[#ffffff47] ">
            <div className="w-full flex items-center justify-between p-2">
              <p className="text-white">New Question Received</p>
              <p className="text-white  cursor-pointer">Mark as read</p>
            </div>
            <p className="px-2 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              eos ex doloremque quis quisquam nobis necessitatibus qui numquam
              pariatur autem.
            </p>
            <p className="text-white p-2 text-[14px]">5 days ago</p>
          </div>
          <div className="bg-[#2d3a4ea1] font-Poppins border-b border-b-[#ffffff47] ">
            <div className="w-full flex items-center justify-between p-2">
              <p className="text-white">New Question Received</p>
              <p className="text-white  cursor-pointer">Mark as read</p>
            </div>
            <p className="px-2 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              eos ex doloremque quis quisquam nobis necessitatibus qui numquam
              pariatur autem.
            </p>
            <p className="text-white p-2 text-[14px]">5 days ago</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardHeader;
