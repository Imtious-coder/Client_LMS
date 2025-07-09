/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable  @typescript-eslint/no-unused-vars */
"use client";
import { Box, IconButton, Typography } from "@mui/material";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { FC, JSX, useEffect, useState } from "react";
import { BiCategory, BiChart, BiExit, BiHistory } from "react-icons/bi";
import { BsFillHouseFill } from "react-icons/bs";
import {
  RiArrowGoForwardFill,
  RiReceiptLine,
  RiTeamLine,
  RiVideoChatFill,
} from "react-icons/ri";
import { Menu, MenuItem, ProSidebar } from "react-pro-sidebar";
import { useSelector } from "react-redux";

import { FcVideoCall } from "react-icons/fc";
import { GrGroup, GrMapLocation } from "react-icons/gr";
import { SiQuizlet, SiWebpack } from "react-icons/si";
import { TfiControlBackward } from "react-icons/tfi";
import avatarDefault from "../../../../public/assests/avatar.png";

interface itemProps {
  title: string;
  to: string;
  icon: JSX.Element;
  selected: string;
  setSelected: any;
}

const Item: FC<itemProps> = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      {/* <Typography className="!text-[16px] !font-Poppins">{title}</Typography> */}
      <Link href={to} className="!text-[16px] !font-Poppins">
        {title}
      </Link>
    </MenuItem>
  );
};

const AdminSidebar = () => {
  const { user } = useSelector((state: any) => state.auth);
  const [logout, setLogout] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  const logoutHandler = () => {
    setLogout(true);
  };

  return (
    <Box
      sx={{
        "& .pro-sidebar-iner": {
          background: `${theme === "#111C43 !important"}`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: `${theme === "transparent !important"}`,
          height: "16px",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
          opacity: 1,
          display: "flex",
          alignItems: "center",
          gap: "10px",
          color: "#ffffffc1 !important",
        },
        "& .pro-menu-item": {
          color: `${theme !== "dark" && "#000"}`,
        },
      }}
      className="bg-[#111c43]"
    >
      <ProSidebar
        collapsed={isCollapsed}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          overflowY: isCollapsed ? "hidden" : "scroll",
          width: isCollapsed ? "60px" : "15%",
        }}
        className="bg-blue-900/30"
      >
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <RiArrowGoForwardFill /> : undefined}
            style={{ margin: "10px 0 20px 0" }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Link href="/">
                  <h3 className="text-[25px] font-Poppins uppercase text-white mr-4">
                    LMS
                  </h3>
                </Link>
                <IconButton
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="inline-block"
                >
                  <TfiControlBackward className="text-[#ffffffc1]" />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Image
                  alt=""
                  width={100}
                  height={100}
                  src={user.avatar ? user.avatar.url : avatarDefault}
                  // src={avatarDefault}
                  className="rounded-full"
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h4"
                  className="!text-[20px] text-[#ffffffc1]"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {user?.name}
                </Typography>
                <Typography
                  variant="h6"
                  className="!text-[20px] text-[#ffffffc1] capitalize"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {user?.role}
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title={isCollapsed ? "" : "Dashboard"}
              to="/admin"
              icon={<BsFillHouseFill />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h5"
              className="!text-[18px] text-[#ffffffc1] capitalize !font-[400]"
              sx={{ m: "15px 0 5px 25px" }}
            >
              {!isCollapsed && "Data"}
            </Typography>
            <Item
              title={isCollapsed ? "" : "Users"}
              to={"/admin/users"}
              icon={<GrGroup />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={isCollapsed ? "" : "Invoices"}
              to="/admin/invoice"
              icon={<RiReceiptLine />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h5"
              className="!text-[18px] text-[#ffffffc1] capitalize !font-[400]"
              sx={{ m: "15px 0 5px 20px" }}
            >
              {!isCollapsed && "Content"}
            </Typography>
            <Item
              title={isCollapsed ? "" : "Create Course"}
              to="/admin/create-course"
              icon={<FcVideoCall />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={isCollapsed ? "" : "Live Course"}
              to="/admin/courses"
              icon={<RiVideoChatFill />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h5"
              className="!text-[18px] text-[#ffffffc1] capitalize !font-[400]"
              sx={{ m: "15px 0 5px 20px" }}
            >
              {!isCollapsed && "Customization"}
            </Typography>
            <Item
              title={isCollapsed ? "" : "Hero"}
              to="/admin/hero"
              icon={<SiWebpack />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={isCollapsed ? "" : "FAQ"}
              to="/admin/faq"
              icon={<SiQuizlet />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={isCollapsed ? "" : "Categories"}
              to="/admin/categories"
              icon={<BiCategory />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h5"
              className="!text-[18px] text-[#ffffffc1] capitalize !font-[400]"
              sx={{ m: "15px 0 5px 20px" }}
            >
              {!isCollapsed && "Controllers"}
            </Typography>
            <Item
              title={isCollapsed ? "" : "Manage Team"}
              to="/admin/team"
              icon={<RiTeamLine />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              className="!text-[18px] text-[#ffffffc1] capitalize !font-[400]"
              sx={{ m: "15px 0 5px 20px" }}
            >
              {!isCollapsed && "Analytics"}
            </Typography>
            <Item
              title={isCollapsed ? "" : "Course Analytics"}
              to="/admin/course-analytics"
              icon={<BiChart />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={isCollapsed ? "" : "Orders Analytics"}
              to="/admin/orders-analytics"
              icon={<GrMapLocation />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={isCollapsed ? "" : "User Analytics"}
              to="/admin/user-analytics"
              icon={<BiHistory />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              className="!text-[18px] text-[#ffffffc1] capitalize !font-[400]"
              sx={{ m: "15px 0 5px 20px" }}
            >
              {!isCollapsed && "Extras"}
            </Typography>
            <Item
              title={isCollapsed ? "" : "Settings"}
              to="/admin/settings"
              icon={<BiHistory />}
              selected={selected}
              setSelected={setSelected}
            />
            <div onClick={logoutHandler}>
              <Item
                title={isCollapsed ? "" : "Logout"}
                to="/"
                icon={<BiExit />}
                selected={selected}
                setSelected={setSelected}
              />
            </div>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default AdminSidebar;
