"use client";
import UsersAnalytics from "@/app/components/Admin/Analytics/UsersAnalytics";
import DashBoardHero from "@/app/components/Admin/DashBoardHero";
import AdminSidebar from "@/app/components/Admin/sidebar/AdminSidebar";
import AdminProtected from "@/app/hooks/adminProtected";
import Heading from "@/app/utils/Heading";

// type Props = {};

const page = () => {
  return (
    <div>
      <AdminProtected>
        <Heading title={` Admin - LMS`} description="" keywords="" />
        <div className="flex h-screen">
          <div className="2xl:w-[16%] w-1/5 z-50">
            <AdminSidebar />
          </div>
          <div className="w-[85%]">
            <DashBoardHero />
            <UsersAnalytics />
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
