/* eslint-disable  @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  useEditLayoutMutation,
  useGetHeroDataQuery,
} from "@/redux/features/layout/layoutApi";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";
import { style } from "../../../styles/style";
import Loader from "../../Loader";

type Props = {};

const EditCategories = (props: Props) => {
  const { data, isLoading, refetch } = useGetHeroDataQuery("Categories", {
    refetchOnMountOrArgChange: true,
  });

  const [editLayout, { isSuccess: layoutSuccess, error }] =
    useEditLayoutMutation();

  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    if (data) {
      setCategories(data.layout.categories);
    }
    if (layoutSuccess) {
      refetch();
      toast.success("Categories updated succssfully");
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData?.data.message);
        toast.error("Something went wrong!");
      }
    }
  }, [data, layoutSuccess, error, refetch]);

  const handleCategoriesAdd = (id: any, value: string) => {
    setCategories((prevCategory: any) =>
      prevCategory.map((i: any) => (i._id === id ? { ...i, title: value } : i))
    );
  };

  const newCategoriesHandler = () => {
    if (categories[categories.length - 1].title === "") {
      toast.error("Category title can't be empty");
    } else {
      setCategories((prevCategory: any) => [...prevCategory, { title: "" }]);
    }
  };

  const areCategoriesUnchanged = (
    orginalCategories: any[],
    newCategories: any[]
  ) => {
    return JSON.stringify(orginalCategories) === JSON.stringify(newCategories);
  };

  const isAnyCategoryTitleEmpty = (categories: any[]) => {
    return categories.some((q) => q.title === "");
  };

  const editCategoriesHandler = async () => {
    if (
      !areCategoriesUnchanged(data?.layout?.categories, categories) &&
      !isAnyCategoryTitleEmpty(categories)
    ) {
      await editLayout({
        type: "Categories",
        categories,
      });
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="mt-[120px] text-center">
          <h1 className={`${style.title}`}>All Categories</h1>
          {categories &&
            categories?.map((item: any, index: number) => {
              return (
                <div key={index} className="p-3">
                  <div className="flex items-center w-full justify-center">
                    <input
                      className={`${style.input} !w-[unset] !border-none !text-[20px]`}
                      value={item.title}
                      onChange={(e) =>
                        handleCategoriesAdd(item._id, e.target.value)
                      }
                      placeholder={"Enter category title..."}
                    />
                    <AiOutlineDelete
                      className="text-white text-[18px] cursor-pointer"
                      onClick={() => {
                        setCategories((prevCategory: any) =>
                          prevCategory.filter((i: any) => i._id !== item._id)
                        );
                      }}
                    />
                  </div>
                </div>
              );
            })}
          <br />
          <br />
          <div className="flex w-full justify-center">
            <IoMdAddCircleOutline
              className="text-white text-[25px] cursor-pointer"
              onClick={newCategoriesHandler}
            />
          </div>

          <div
            className={`${
              style.button
            } !w-[100px] !min-h-[40px] !h-[40px] text-white bg-[#cccccc34] ${
              areCategoriesUnchanged(data?.layout?.categories, categories) ||
              isAnyCategoryTitleEmpty(categories)
                ? "!cursor-not-allowed"
                : "!cursor-pointer !bg-[#42d383]"
            } !rounded absolute bottom-12 right-12`}
            onClick={
              areCategoriesUnchanged(data?.layout?.categories, categories) ||
              isAnyCategoryTitleEmpty(categories)
                ? () => null
                : editCategoriesHandler
            }
          >
            Save
          </div>
        </div>
      )}
    </>
  );
};

export default EditCategories;
