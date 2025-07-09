/* eslint-disable  @typescript-eslint/no-unused-vars */
"use client";
import { FC, useState } from "react";
import DashboardHeader from "./DashboardHeader";

// type Props = {};

const DashBoardHero: FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <DashboardHeader />
    </div>
  );
};

export default DashBoardHero;
