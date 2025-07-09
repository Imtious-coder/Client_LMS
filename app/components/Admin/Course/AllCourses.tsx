"use client";
import {
  useDeleteCourseMutation,
  useGetAllCourseQuery,
} from "@/redux/features/courses/coursesApi";
import { Box, Button, Modal } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { format } from "timeago.js";
import { style } from "../../../styles/style";
import Loader from "../../Loader";

// type Props = {};

const AllCourses = () => {
  const { isLoading, data, refetch } = useGetAllCourseQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );
  const [open, setOpen] = useState(false);
  const [courseId, setCourseId] = useState("");
  const [deleteCourse, { isSuccess, error }] = useDeleteCourseMutation({});

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "title", headerName: "Course Title", flex: 1 },
    { field: "ratings", headerName: "Ratings", flex: 0.5 },
    { field: "purchased", headerName: "Purchased", flex: 0.5 },
    { field: "created_at", headerName: "Created At", flex: 0.5 },
    {
      field: "  ",
      headerName: "Edit",
      flex: 0.2,
      renderCell: (params: GridRenderCellParams) => {
        return (
          <>
            <Button>
              <Link href={`/admin/edit-course/${params.row.id}`}>
                <BiEdit className="text-white" size={20} />
              </Link>
            </Button>
          </>
        );
      },
    },
    {
      field: " ",
      headerName: "Delete",
      flex: 0.2,
      renderCell: (params: GridRenderCellParams) => {
        return (
          <>
            <Button
              onClick={() => {
                setOpen(!open);
                setCourseId(params.row.id);
              }}
            >
              <AiOutlineDelete className="text-white" size={20} />
            </Button>
          </>
        );
      },
    },
  ];

  //   const rows: {
  //   id: string;
  //   title: string;
  //   ratings: number;
  //   purchased: number;
  //   created_at: string;
  // }[] = [];

  // if (data && Array.isArray(data.courses)) {
  //   data.courses.forEach((item: {
  //     _id: string;
  //     name: string;
  //     ratings: number;
  //     purchased: number;
  //     createdAt: string;
  //   }) => {
  //     rows.push({
  //       id: item._id,
  //       title: item.name,
  //       ratings: item.ratings,
  //       purchased: item.purchased,
  //       created_at: item.createdAt,
  //     });
  //   });
  // }

  type Course = {
    _id: string;
    name: string;
    ratings: number;
    purchased: number;
    createdAt: string;
  };
  
  const rows: {
    id: string;
    title: string;
    ratings: number;
    purchased: number;
    created_at: string;
  }[] = [];
  
  if (data && Array.isArray(data.courses)) {
    data.courses.forEach((item: Course) => {
      rows.push({
        id: item._id,
        title: item.name,
        ratings: item.ratings,
        purchased: item.purchased,
        created_at: format(item.createdAt),
      });
    });
  }

  useEffect(() => {
    if (isSuccess) {
      setOpen(false);
      refetch();
      toast.success("Course Deleted Successfully");
      // redirect("/admin/all-courses");
    }
    if (error) {
      if ("data" in error) {
        const errorMessage = error as { data: { message: string } };
        toast.error(errorMessage.data.message);
        toast.error("Something went wrong");
      }
    }
  }, [isSuccess, error, refetch]);

  const handleDelete = async () => {
    const id = courseId;
    await deleteCourse(id);
    console.log("Deleted Course");
  };

  return (
    <div className="mt-[120px]">
      {isLoading ? (
        <Loader />
      ) : (
        <Box m="20px">
          <Box
            m="40px 0 0 0"
            height="80vh"
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
                outline: "none",
              },
              "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
                color: "#fff",
              },
              "& .MuiDataGrid-sortIcon": {
                color: "#fff",
              },
              "& .MuiDataGrid-row": {
                color: "#fff",
                borderBottom: "1px solid #ffffff30 !important",
              },
              "& .MuiTablePagination-root": {
                color: "#fff",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "none",
              },
              "& .name-column--cell": {
                color: "#fff",
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#3e4396 !important",
                borderBottom: "none",
                color: "#000",
              },
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: "#1F2A40",
              },
              "& .MuiDataGrid-footerContainer": {
                backgroundColor: "#3e4396",
                borderTop: "none",
                color: "#fff",
              },
              "& .MuiCheckbox-root": {
                color: "#b7ebde !important",
              },
              "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: "#fff !important",
              },
            }}
          >
            <DataGrid checkboxSelection rows={rows} columns={columns} />
          </Box>
          {open && (
            <Modal
              open={open}
              onClose={() => setOpen(!open)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[450px] bg-slate-900 rounded-[8px] shadow p-4 outline-none ">
                <h1 className={`${style.title}`}>
                  Are you sure you want to delete this course?
                </h1>
                <div className="flex w-full items-center justify-between mb-6 mt-4">
                  <div
                    className={`${style.button} !w-[120px] h-[30px] !bg-[#57c7a3] border border-[#ffffff6c]`}
                    onClick={() => setOpen(!open)}
                  >
                    Cancel
                  </div>
                  <div
                    className={`${style.button} !w-[120px] h-[30px] !bg-orange-700 border border-[#ffffff6c]`}
                    onClick={handleDelete}
                  >
                    Delete
                  </div>
                </div>
              </Box>
            </Modal>
          )}
        </Box>
      )}
    </div>
  );
};

export default AllCourses;
