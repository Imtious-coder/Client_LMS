/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable  @typescript-eslint/no-unused-vars */
import { FC } from "react";
import { IoMdCheckmark } from "react-icons/io";

type Props = {
  active: number;
  setActive: (active: number) => void;
};

const CourseOptions: FC<Props> = ({ active, setActive }) => {
  const options = [
    "Course Information",
    "Course Options",
    "Course Content",
    "Course Preview",
  ];
  return (
    <div>
      {options.map((option: any, index: number) => (
        <div key={index} className={`w-full flex py-5`}>
          <div
            className={`w-[35px] h-[35px] rounded-full flex items-center justify-center ${
              active + 1 > index ? "bg-blue-500" : "bg-[#384766]"
            } relative`}
          >
            <IoMdCheckmark className="text-[25px]" />
            {index !== options.length - 1 && (
              <div
                className={`absolute w-1 h-[30px] ${
                  active + 1 > index ? "bg-blue-500" : "bg-[#384766]"
                } bottom-[-100%]`}
              />
            )}
          </div>
          <h5
            className={`pl-3 ${
              active === index ? "text-white" : "text-white"
            } text-[20px]`}
          >
            {option}
          </h5>
        </div>
      ))}
    </div>
  );
};

export default CourseOptions;
