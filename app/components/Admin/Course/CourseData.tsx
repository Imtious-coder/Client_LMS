/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { FC } from "react";
import toast from "react-hot-toast";
import { GrAddCircle } from "react-icons/gr";
import { style } from "../../../styles/style";

type Props = {
  benefits: { title: string }[];
  setBenefits: (benefits: { title: string }[]) => void;
  prerequisites: { title: string }[];
  setPrerequisites: (prerequisites: { title: string }[]) => void;
  active: number;
  setActive: (active: number) => void;
};

const CourseData: FC<Props> = ({
  active,
  setActive,
  benefits,
  setBenefits,
  prerequisites,
  setPrerequisites,
}) => {
  const handleBenefitChange = (index: number, value: any) => {
    const updatedBenefits = [...benefits];
    updatedBenefits[index].title = value;
    setBenefits(updatedBenefits);
  };

  const handleAddBenefit = () => {
    setBenefits([...benefits, { title: "" }]);
  };

  const handlePrerequisitesChange = (index: number, value: any) => {
    const updatedPrerequisites = [...prerequisites];
    updatedPrerequisites[index].title = value;
    setPrerequisites(updatedPrerequisites);
  };

  const handlePrerequisitesBenefit = () => {
    setPrerequisites([...prerequisites, { title: "" }]);
  };

  const prevButton = () => {
    setActive(active - 1);
  };

  const handleOptions = () => {
    if (
      benefits[benefits.length - 1]?.title !== "" &&
      prerequisites[prerequisites.length - 1]?.title !== ""
    ) {
      setActive(active + 1);
    } else {
      toast.error("Please fill the fields for go to next!");
    }
  };

  return (
    <div className="w-[80%] m-auto mt-24 block">
      <div>
        <label htmlFor="Benefit" className={`${style.label} text-[20px]`}>
          What are the benefits for students in this course?
        </label>
        <br />
        {benefits.map((benefit: any, index: number) => (
          <input
            type="text"
            key={index}
            name="Benefit"
            required
            value={benefit.title}
            placeholder="You will be able to build a full stack LMS Platform..."
            className={`${style.input} my-2`}
            onChange={(e) => handleBenefitChange(index, e.target.value)}
          />
        ))}
        <GrAddCircle
          style={{ margin: "10px 0px", cursor: "pointer", fontSize: "30px" }}
          onClick={handleAddBenefit}
        />
      </div>
      <div>
        <label htmlFor="Prerequisite" className={`${style.label} text-[20px]`}>
          What are the prerequisites for starting this course?
        </label>
        <br />
        {prerequisites.map((prerequisite: any, index: number) => (
          <input
            type="text"
            key={index}
            name="Prerequisite"
            required
            value={prerequisite.title}
            placeholder="You ned to be a Human"
            className={`${style.input} my-2`}
            onChange={(e) => handlePrerequisitesChange(index, e.target.value)}
          />
        ))}
        <GrAddCircle
          style={{ margin: "10px 0px", cursor: "pointer", fontSize: "30px" }}
          onClick={handlePrerequisitesBenefit}
        />
      </div>
      <div className="w-full flex items-center justify-between">
        <div
          className="w-full md:w-[180px] h-[40px] bg-[#37a39a] text-[#fff] flex items-center justify-center text-center rounded mt-8 cursor-pointer"
          onClick={() => prevButton()}
        >
          Prev
        </div>
        <div
          className="w-full md:w-[180px] h-[40px] bg-[#37a39a] text-[#fff] flex items-center justify-center text-center rounded mt-8 cursor-pointer"
          onClick={() => handleOptions()}
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default CourseData;
