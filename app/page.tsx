/* eslint-disable  @typescript-eslint/no-unused-vars */
"use client";

import { FC, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Route/Hero";
import Heading from "./utils/Heading";

// interface Props {}

// const Page: FC<Props> = (props) => {
//   return (
//     <div className="">
//       <Heading
//         title="LMS"
//         description="Learn isthe key"
//         keywords="Web, MERN, Python"
//       />
//     </div>
//   );
// };

const Page: FC = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");
  return (
    <div className="">
      <Heading title="LMS" description="" keywords="" />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <Hero />
    </div>
  );
};

export default Page;
