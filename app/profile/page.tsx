/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable  @typescript-eslint/no-unused-vars */
"use client";
import { FC, useState } from "react";
import Header from "../components/Header";
import Protected from "../hooks/useProtected";
import Heading from "../utils/Heading";
import Profile from "../components/Profile/Profile";
import { useSelector } from "react-redux";

// type Props = {};

const Page: FC = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(5);
  const [route, setRoute] = useState("Login");
  const {user } = useSelector((state:any) => state.auth)
  return (
    <div>
      <Protected>
        <Heading title={`${user?.name} Profile - LMS`} description="" keywords="" />
        <Header
          open={open}
          setOpen={setOpen}
          activeItem={activeItem}
          setRoute={setRoute}
          route={route}
        />
        <Profile user={user}/>
      </Protected>
    </div>
  );
};

export default Page;
