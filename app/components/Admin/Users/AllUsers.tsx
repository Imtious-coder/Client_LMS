"use client";
import { useGetAllUsersQuery } from "@/redux/features/user/userApi";
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { FC, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { format } from "timeago.js";
import { style } from "../../../styles/style";
import Loader from "../../Loader";

type Props = {
  isTeam: boolean;
};

const AllUsers: FC<Props> = ({ isTeam }) => {
  const { isLoading, data } = useGetAllUsersQuery(undefined);
  const [active, setActive] = useState(false);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.3 },
    { field: "name", headerName: "Name", flex: 0.5 },
    { field: "email", headerName: "Email", flex: 0.5 },
    { field: "role", headerName: "Role", flex: 0.5 },
    { field: "courses", headerName: "Purchased Courses", flex: 0.5 },
    { field: "created_at", headerName: "Joined At", flex: 0.5 },
    {
      field: " ",
      headerName: "Delete",
      flex: 0.2,
      renderCell: () => {
        return (
          <>
            <Button>
              <AiOutlineDelete className="text-white" size={20} />
            </Button>
          </>
        );
      },
    },
    {
      field: "  ",
      headerName: "Email",
      flex: 0.2,
      renderCell: (params: import("@mui/x-data-grid").GridRenderCellParams) => {
        return (
          <>
            <Button>
              <a href={`mailto:${params.row.email}`}>
                <MdEmail className="text-white" size={20} />
              </a>
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

  interface UserRow {
    id: string;
    name: string;
    email: string;
    courses: number;
    role: string;
    created_at: string;
  }

  const rows: UserRow[] = [];

  if (isTeam) {
    interface User {
      _id: string;
      name: string;
      email: string;
      courses: { length: number }[];
      role: string;
      createdAt: string;
    }

    const newData =
      data && data.users.filter((item: User) => item.role === "admin");

    if (newData) {
      newData.forEach((item: User) => {
        rows.push({
          id: item._id,
          name: item.name,
          email: item.email,
          courses: item.courses.length,
          role: item.role,
          created_at: format(item.createdAt),
        });
      });
    }
  } else {
    if (data && Array.isArray(data.users)) {
      data.users.forEach((item: {
        _id: string;
        name: string;
        email: string;
        courses: { length: number }[];
        role: string;
        createdAt: string;
      }) => {
        rows.push({
          id: item._id,
          name: item.name,
          email: item.email,
          courses: item.courses.length,
          role: item.role,
          created_at: format(item.createdAt),
        });
      });
    }
  }

  return (
    <div className="mt-[120px]">
      {isLoading ? (
        <Loader />
      ) : (
        <Box m="20px">
          <div className="w-full flex justify-end">
            <div
              className={`${style.button} !w-[200px] !bg-[#57c7a3] !h-[35px] border border-[#ffffff6c]`}
              onClick={() => setActive(!active)}
            >
              Add New Member
            </div>
          </div>
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

export default AllUsers;
