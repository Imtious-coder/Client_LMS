"use client";
import { ThemeSwitcher } from "@/app/utils/ThemeSwitcher";
import { FC, useState } from "react";
import { IoIosNotifications } from "react-icons/io";

type Props = {};

const DashboardHeader: FC<Props> = () => {
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
        <div className="w-[350px] h-[50vh] bg-[#111C43] shadow-xl absolute top-16 z-10 rounded "></div>
      )}
    </div>
  );
};

export default DashboardHeader;
