"use client"
import CreateCourse from "@/app/components/Admin/Course/CreateCourse";
import DashboardHeader from "@/app/components/Admin/DashboardHeader";
import AdminSidebar from "@/app/components/Admin/sidebar/AdminSidebar";
import AdminProtected from "@/app/hooks/adminProtected";
import Heading from "@/app/utils/Heading";
import { FC } from "react";

type Props = {};

const page: FC<Props> = (props) => {
  return (
    <div>
      <AdminProtected>
        <Heading title={`Admin - LMS`} description="" keywords="" />
        <div className="flex h-[200vh]">
          <div className="2xl:w-[16%] w-1/5 z-50">
            <AdminSidebar />
          </div>
          <div className="w-[85%]">
            <DashboardHeader />
            <CreateCourse />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
