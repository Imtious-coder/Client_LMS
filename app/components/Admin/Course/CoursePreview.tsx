/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import CoursePlayer from "@/app/utils/CoursePlayer";
import Ratings from "@/app/utils/Ratings";
import { FC } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { style } from "../../../styles/style";

type Props = {
  active: number;
  setActive: (active: number) => void;
  courseData: any;
  handleCourseCreate: any;
  isEdit: boolean;
};

const CoursePreview: FC<Props> = ({
  courseData,
  handleCourseCreate,
  setActive,
  active,
  isEdit,
}) => {
  const discountPercentege =
    ((courseData?.estimatedPrice - courseData?.price) /
      courseData?.estimatedPrice) *
    100;
  const discounPercentegePrice = discountPercentege.toFixed(0);

  const prevButton = () => {
    setActive(active - 1);
  };

  const createCourse = () => {
    handleCourseCreate();
  };

  return (
    <div className="m-auto py-5 mb-5 w-[90%]">
      <div className="w-full relative">
        <div className="w-full mt-10">
          <CoursePlayer
            videoUrl={courseData?.demoUrl}
            title={courseData?.title}
          />
        </div>
        <div className="flex items-center">
          <h1 className="pt-5 text-[25px]">
            {courseData?.price === 0 ? "Free" : courseData?.price + "$"}
          </h1>
          <h5 className="pl-3 text-[20px] mt-2 line-through opacity-80">
            {courseData?.price === 0 ? "Free" : courseData?.price + "$"}
          </h5>
          <h4 className="pl-5 pt-4 text-[22px]">
            {discounPercentegePrice}% Off
          </h4>
        </div>

        <div className="flex items-center">
          <div
            className={`${style.button} !w-[180px] my-3 font-Poppins !bg-[crimson] cursor-not-allowed`}
          >
            Buy Now {courseData?.price}$
          </div>
        </div>

        <div className="flex items-center">
          <input
            type="text"
            name=""
            id=""
            placeholder="Discount code..."
            className={`${style.input} 2xl:!w-[50%] lg:w-[60%] ml-3 !mt-0 `}
          />
          <div
            className={`${style.button} !w-[120px] my-3 ml-4 font-Poppins cursor-pointer `}
          >
            Apply
          </div>
        </div>
        <p className="pb-1">· Source code included</p>
        <p className="pb-1">· Full lifetime access</p>
        <p className="pb-1">· Certificate of completion</p>
        <p className="pb-3 md:pb-1">· Premium Support</p>
      </div>
      <div className="w-full">
        <div className="w-full md:pr-5">
          <h1 className="text-[25px] font-Poppins font-[600]">
            {courseData?.name}
          </h1>
          <div className="flex items-center justify-between pt-3">
            <div className="flex items-center">
              <Ratings rating={0} />
              <h5>0 Reviews</h5>
            </div>
            <h5>0 Students</h5>
          </div>
          <br />
          <h1 className="text-[25px] font-Poppins font-[600]">
            What you will learn from this course?
          </h1>
        </div>

        {courseData?.benefits?.map((item: any, index: number) => (
          <div className="w-full flex md:items-center py-2" key={index}>
            <div className="w-[15px] mr-1">
              <IoIosCheckmarkCircleOutline size={20} />
            </div>
            <p className="pl-2">{item.title}</p>
          </div>
        ))}
        <br />
        <br />
        <h1 className="text-[25px] font-Poppins font-[600]">
          Course Prerequisites
        </h1>
        {courseData?.prerequisites?.map((item: any, index: number) => (
          <div className="w-full flex md:items-center py-2" key={index}>
            <div className="w-[15px] mr-1">
              <IoIosCheckmarkCircleOutline size={20} />
            </div>
            <p className="pl-2">{item.title}</p>
          </div>
        ))}
        <br />
        <br />
        <div className="w-full">
          <h1 className="text-[25px] font-Poppins font-[600]">
            Course Details
          </h1>
          <p className="text-[18px] mt-[20px] whitespace-pre-line w-full overflow-hidden">
            {courseData?.description}
          </p>
        </div>
        <br />
        <br />
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
          onClick={() => createCourse()}
        >
          {isEdit ? "Update" : "Create"}
        </div>
      </div>
    </div>
  );
};

export default CoursePreview;
