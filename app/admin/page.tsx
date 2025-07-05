"use client";
import { FC } from "react";
import DashBoardHero from "../components/Admin/DashBoardHero";
import AdminSidebar from "../components/Admin/sidebar/AdminSidebar";
import AdminProtected from "../hooks/adminProtected";
import Heading from "../utils/Heading";

type Props = {};

const page: FC<Props> = (props) => {
  return (
    <div>
      <AdminProtected>
        <Heading title={` Admin - LMS`} description="" keywords="" />
        <div className="flex h-[200vh]">
          <div className="2xl:w-[16%] w-1/5 z-50">
            <AdminSidebar />
          </div>
          <div className="w-[85%]">
            <DashBoardHero />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
