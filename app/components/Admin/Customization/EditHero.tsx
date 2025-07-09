"use client";
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { style } from "../../../styles/style";

// type Props = {};

const EditHero: FC = () => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const { data } = useGetHeroDataQuery("Banner", {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (data) {
      setTitle(data?.layout?.banner.title);
      setSubTitle(data?.layout?.banner.subTitle);
      setImage(data?.layout?.banner?.image.url);
    }
  }, [data]);

  const handleUpdate = () => {};
  const handleEdit = () => {};

  return (
    <>
      <div className="w-full lg:flex items-center">
        <div className="lg:w-[40%] lg:min-h-screen flex items-center justify-end pt-[70px] lg:pt-[0px] z-10">
          <div className="relative flex items-center justify-end ">
            <Image
              width={1000}
              height={1000}
              src={image}
              alt=""
              className="object-contain xl:max-w-[90%] w-[90%] 2xl-[85%] h-[auto] z-[10]"
            />
            <input
              type="file"
              name=""
              id="banner"
              accept="image/*"
              onChange={handleUpdate}
              className="hidden"
            />
            <label htmlFor="banner" className="absolute bottom-0 right-0 z-20">
              <AiOutlineCamera className="text-white text-[18px] cursor-pointer" />
            </label>
          </div>
        </div>
        <div className="lg:w-[60%] flex flex-col items-center lg:mt-[0px] text-center lg:text-left mt-[150px]">
          <textarea
            className="text-white resize-none text-[20px] px-3 w-full lg:text-[60px] 2xl:text-[70px] font-[600]"
            placeholder="Improve Your Outline Learning Experience Better Instantly"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            rows={4}
            cols={10}
          />
          <br />
          <textarea
            className="!text-[#edfff4] font-Josefin text-[18px] font-[600] 2xl:!w-[55%] xl:!w-[74%] bg-transparent"
            placeholder="We have 40k+ Online courses and 500k+ Online restered student. Find your desired courses from them."
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
            rows={4}
            // cols={10}
          />
          <br />
          <br />
          <br />
          <div
            className={`${
              style.button
            } !w-[100px] !min-h-[40px] !h-[40px] text-white bg-[#cccccc34] ${
              data?.layout?.banner?.title !== title ||
              data?.layout?.banner?.subTitle !== subTitle ||
              data?.layout?.banner?.image?.url !== image
                ? "!cursor-pointer !bg-[#42d383]"
                : "!cursor-not-allowed"
            } !rounded absolute bottom-12 right-12`}
            onClick={
              data?.layout?.banner?.title !== title ||
              data?.layout?.banner?.subTitle !== subTitle ||
              data?.layout?.banner?.image?.url !== image
                ? handleEdit
                : () => null
            }
          >
            Save
          </div>
        </div>
      </div>
    </>
  );
};

export default EditHero;
