"use client";
import { FC } from "react";
import AdminSidebar from "../components/Admin/admin/AdminSidebar";
import DashBoardHero from "../components/Admin/DashBoardHero";
import AdminProtected from "../hooks/adminProtected";
import Heading from "../utils/Heading";

type Props = {};

const page: FC<Props> = (props) => {
  return (
    <div>
      <AdminProtected>
        <Heading title={` Admin - LMS`} description="" keywords="" />
        <div className="flex h-[200vh]">
          <div className="2xl:w-[16%] w-1/4">
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
