/* eslint-disable  @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useGetCoursesAnalyticsQuery } from "@/redux/features/analytics/analyticsApi";
import {
  Bar,
  BarChart,
  Label,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { style } from "../../../styles/style";
import Loader from "../../Loader";

type Props = {};

const CourseAnalytics = (props: Props) => {
  const { data, isLoading } = useGetCoursesAnalyticsQuery({});

  const analyticsData = [
    {
      name: "Jun 2023",
      uv: 3,
    },
    {
      name: "July 2023",
      uv: 2,
    },
    {
      name: "Aug 2023",
      uv: 5,
    },
    {
      name: "Sept 2023",
      uv: 7,
    },
    {
      name: "Oct 2023",
      uv: 2,
    },
    {
      name: "Nov 2023",
      uv: 5,
    },
    {
      name: "Dec 2023",
      uv: 9,
    },
  ];

  // const analyticsData: any = [];
  // data &&
  //   data.courses.last12Months.forEach((item: any) => {
  //     analyticsData.push({ name: item.month, uv: item.count });
  //   });

  const minValue = 0;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="h-screen">
          <div className="mt-[50px]">
            <h1 className={`${style.title} px-5 !text-start`}>
              Courses Analytics
            </h1>
            <p className={`${style.label} px-5 !text-start`}>
              Last 12 months analytics data{" "}
            </p>
          </div>

          <div className="w-full h-[90%] flex items-center justify-center">
            <ResponsiveContainer width="90%" height="50%">
              <BarChart width={150} height={300} data={analyticsData}>
                <XAxis dataKey="name">
                  <Label offset={0} position="insideBottom" />
                </XAxis>
                <YAxis domain={[minValue, "auto"]} />
                <Bar dataKey="uv" fill="#3faf82">
                  <LabelList dataKey="uv" position="top" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseAnalytics;
