"use client";

import { FC } from "react";
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
  return (
    <div className="">
      <Heading
        title="LMS"
        description="Learning is the key"
        keywords="Web, MERN, Python"
      />
    </div>
  );
};

export default Page;
