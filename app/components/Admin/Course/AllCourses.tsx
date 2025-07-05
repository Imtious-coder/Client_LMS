"use client";
import { useGetAllCourseQuery } from "@/redux/features/courses/coursesApi";
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { format } from "timeago.js";
import Loader from "../../Loader";

type Props = {};

const AllCourses = (props: Props) => {
  const { isLoading, data, error } = useGetAllCourseQuery();

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
      renderCell: (params: any) => {
        return (
          <>
            <Button>
              <BiEdit className="text-white" size={20} />
            </Button>
          </>
        );
      },
    },
    {
      field: " ",
      headerName: "Delete",
      flex: 0.2,
      renderCell: (params: any) => {
        return (
          <>
            <Button>
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

  const rows: any = [];

  {
    data &&
      data.courses.forEach((item: any) => {
        rows.push({
          id: item._id,
          title: item.name,
          ratings: item.ratings,
          purchased: item.purchased,
          created_at: format(item.createdAt),
        });
      });
  }

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
        </Box>
      )}
    </div>
  );
};

export default AllCourses;
