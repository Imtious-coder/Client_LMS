import Image from "next/image";
import { FC } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { GoListOrdered } from "react-icons/go";
import { GrAnnounce, GrCertificate } from "react-icons/gr";
import { RiLockPasswordLine } from "react-icons/ri";
import { SiCoursera } from "react-icons/si";
import avatarDefault from "../../../public/assests/avatar.png";

type Props = {
  user: any;
  active: number;
  avatar: string | null;
  setActive: (active: number) => void;
  logOutHandler: any;
};

const SidebarProfile: FC<Props> = ({
  user,
  active,
  avatar,
  setActive,
  logOutHandler,
}) => {
  return (
    <div className="w-full">
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 1 ? "bg-slate-800" : "bg-transparent"
        }`}
        onClick={() => setActive(1)}
      >
        <Image
          src={user.avatar || avatar ? user.avatar || avatar : avatarDefault}
          alt=""
          className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] cursor-pointer rounded-full "
        />
        <h5 className="pl-2 md:block hidden font-Poppins text-white">
          My Account
        </h5>
      </div>
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 2 ? "bg-slate-800" : "bg-transparent"
        }`}
        onClick={() => setActive(2)}
      >
        <RiLockPasswordLine size={20} fill="#fff" />
        <h5 className="pl-2 md:block hidden font-Poppins text-white">
          Change Password
        </h5>
      </div>
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 3 ? "bg-slate-800" : "bg-transparent"
        }`}
        onClick={() => setActive(3)}
      >
        <SiCoursera size={20} fill="#fff" />
        <h5 className="pl-2 md:block hidden font-Poppins text-white">
          Enrolled Courses
        </h5>
      </div>
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 4 ? "bg-slate-800" : "bg-transparent"
        }`}
        onClick={() => setActive(4)}
      >
        <GrCertificate size={20} fill="#fff" />
        <h5 className="pl-2 md:block hidden font-Poppins text-white">
          Certificates
        </h5>
      </div>
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 5 ? "bg-slate-800" : "bg-transparent"
        }`}
        onClick={() => setActive(5)}
      >
        <GrAnnounce size={20} fill="#fff" />
        <h5 className="pl-2 md:block hidden font-Poppins text-white">
          Announcement
        </h5>
      </div>
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 6 ? "bg-slate-800" : "bg-transparent"
        }`}
        onClick={() => setActive(6)}
      >
        <GoListOrdered size={20} fill="#fff" />
        <h5 className="pl-2 md:block hidden font-Poppins text-white">
          Leaderboard
        </h5>
      </div>
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${ 
          active === 7 ? "bg-slate-800" : "bg-transparent"
        }`}
        onClick={() => logOutHandler()}
      >
        <AiOutlineLogout size={20} fill="red" />
        <h5 className="pl-2 md:block hidden font-Poppins text-red-600 font-bold">
          Log Out
        </h5>
      </div>
    </div>
  );
};

export default SidebarProfile;
