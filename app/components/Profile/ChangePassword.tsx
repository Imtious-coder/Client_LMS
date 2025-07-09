/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable  @typescript-eslint/no-unused-vars */
"use client";
import { useUpdatePasswordMutation } from "@/redux/features/user/userApi";
import { FC, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { style } from "../../styles/style";

// type Props = {};

const ChangePassword: FC = (props) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [updatePassword, { isSuccess, error }] = useUpdatePasswordMutation();

  const passwordChangeHandler = async (e: any) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("Password does not match");
    } else {
      await updatePassword({ oldPassword, newPassword });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Password changed successfully");
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      }
      toast.error("Something went wrong");
    }
  }, [isSuccess, error]);

  return (
    <div className="w-full ol-7 px-2 md:px-5 md:pl-0 ">
      <h1 className="block text-[25px] md:text-[30px] font-Poppins text-center font-[500] text-[#fff] pb-2  ">
        Change Password
      </h1>
      <div className="w-full">
        <form
          // aria-required
          onSubmit={passwordChangeHandler}
          className="flex flex-col items-center"
        >
          <div className="mt-5 w-[100%] md:w-[60%] ">
            <label htmlFor="" className="block pb-2">
              Enter your old password
            </label>
            <input
              type="password"
              className={`${style.input} !w-[95%] mb-4 md:mb-0`}
              required
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <div className="mt-5 w-[100%] md:w-[60%] ">
            <label htmlFor="" className="block pb-2">
              Enter your new password
            </label>
            <input
              type="password"
              className={`${style.input} !w-[95%] mb-4 md:mb-0`}
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="mt-5 w-[100%] md:w-[60%] ">
            <label htmlFor="" className="block pb-2">
              Confirm your new password
            </label>
            <input
              type="password"
              className={`${style.input} !w-[95%] mb-4 md:mb-0`}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <input
              type="submit"
              value="Update"
              required
              className={`w-[95%] h-[40px] border border-[#37a39a] text-center text-[#fff] rounded-[3px] mt-8 cursor-pointer`}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
