"use client"
import CreateCourse from "@/app/components/Admin/Course/CreateCourse";
import EditCourse from "@/app/components/Admin/Course/EditCourse";
import DashboardHeader from "@/app/components/Admin/DashboardHeader";
import AdminSidebar from "@/app/components/Admin/sidebar/AdminSidebar";
import AdminProtected from "@/app/hooks/adminProtected";
import Heading from "@/app/utils/Heading";
import { FC } from "react";

type Props = {};

const page: FC<Props> = ({params}:any) => {
    const id = params?.id;

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
            {/* <CreateCourse /> */}
            <EditCourse id={id} />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
