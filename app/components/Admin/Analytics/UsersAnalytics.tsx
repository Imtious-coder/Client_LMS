/* eslint-disable  @typescript-eslint/no-unused-vars */

import { useGetCoursesAnalyticsQuery } from "@/redux/features/analytics/analyticsApi";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { style } from "../../../styles/style";
import Loader from "../../Loader";

type Props = {
  isDashBoard?: boolean;
};

const analyticsData = [
  {
    name: "Jun 2023",
    count: 338,
  },
  {
    name: "July 2023",
    count: 2866,
  },
  {
    name: "Aug 2023",
    count: 666,
  },
  {
    name: "Sept 2023",
    count: 2344,
  },
  {
    name: "Oct 2023",
    count: 243,
  },
  {
    name: "Nov 2023",
    count: 5444,
  },
  {
    name: "Dec 2023",
    count: 792,
  },
];

const UsersAnalytics = ({ isDashBoard }: Props) => {
  const { data, isLoading } = useGetCoursesAnalyticsQuery({});

  // const analyticsData: any = [];
  // data &&
  //   data.users.last12Months.forEach((item: any) => {
  //     analyticsData.push({ name: item.month, count: item.count });
  //   });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div
          className={`${
            !isDashBoard
              ? "mt-[50px]"
              : "mt-[50px] bg:-[#111C43] shadow-sm pb-5 rounded-sm"
          }`}
        >
          <div className={`${!isDashBoard ? "!ml-8 mb-5" : ""}`}>
            <h1
              className={`${style.title} ${
                !isDashBoard && "!tesxt-[20px] px-5 !text-start"
              }`}
            >
              User Analytics
            </h1>
            {!isDashBoard && (
              <p className={`${style.label} px-5`}>
                Last 12 months analytics data{" "}
              </p>
            )}
          </div>
          <div
            className={`w-full ${
              isDashBoard ? "h-[30vh]" : "h-screen"
            } flex items-center justify-center`}
          >
            <ResponsiveContainer
              width={isDashBoard ? "100%" : "90%"}
              height={!isDashBoard ? "50%" : "100%"}
            >
              <AreaChart
                data={analyticsData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="count"
                  stroke="#4d62d9"
                  fill="#4d62d9"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </>
  );
};

export default UsersAnalytics;
