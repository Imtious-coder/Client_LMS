import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { BiSearch } from "react-icons/bi";
import bannerImg from "../../../public/assests/bannerImg.png";
import profileImage1 from "../../../public/assests/man.jpg";

type Props = {};

const Hero: FC<Props> = (props) => {
  return (
    <div className="w-full lg:flex items-center">
      {/* <div className="absolute top-[100px] lg:top-[unset] 2xl:h-[700px] 2xl:w-[700px] xl:h-[600px] xl:w-[600px] h-[50vh] w-[50vh] hero_animation bg-blue-500 rounded-full"></div> */}
      <div className="flex xl:w-[40%] xl:min-h-screen items-center justify-center pt-[70px] xl:pt-[0] z-10 hero_animation">
        <Image
          src={bannerImg}
          alt=""
          width={1600}
          height={1600}
          className="object-contain xl:max-w-[90%] w-[90%] 2xl:max-w-[85%] h-[auto] z-[10] lg:scale-120"
        />
      </div>
      <div className="flex flex-col items-center xl:w-[60%] xl:mt-[0px] text-center xl:text-left mt-[150px] mb-10 ">
        <h2 className="text-white text-[30px] px-3 w-full xl:text-[70px] font-[600] font-Josefin py-2 xl:leading-[75px] 2xl:w-[60%] xl:w-[82%]">
          Improve Your Online Learning Experience Better Instantly
        </h2>
        <br />
        <p className="text-[#edfff4] font-Josefin font-[600] text-[18px] 2xl:w-[55%] xl:w-[78%]">
          We have 40k+ Online courses & 500k+ online registered student. Find
          your desired Courses from them.
        </p>
        <br />
        <br />
        <div className="2xl:w-[55%] xl:w-[78%] w-[90%] h-[50px] bg-transparent relative ">
          <input
            type="search"
            placeholder="Search Courses..."
            className="border border-none placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none text-[#ffffffe6] text-[20px] font-[500] font-Josefin bg-gray-500"
          />
          <div className="absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-[#39c1f3] roundrd-r-[5px] ">
            <BiSearch className="text-white" size={30} />
          </div>
        </div>
        <br />
        <br />
        <div className="2xl:w-[55%] xl:w-[78%] w-[90%] flex items-center">
          <Image
            src={profileImage1}
            alt=""
            width={50}
            height={50}
            className="rounded-full border-2 border-green-500"
          />
          <Image
            src={profileImage1}
            alt=""
            width={50}
            height={50}
            className="rounded-full ml-[-20px]  border-2 border-green-500"
          />
          <Image
            src={profileImage1}
            alt=""
            width={50}
            height={50}
            className="rounded-full ml-[-20px]  border-2 border-green-500"
          />
          <p className="font-Josefin text-[#edfff4] lg:pl-3 text-[18px] font-[600]">
            500k+ People already trusted us.
            <Link href={"/courses"} className="text-[#46e256]">
              View Courses
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
