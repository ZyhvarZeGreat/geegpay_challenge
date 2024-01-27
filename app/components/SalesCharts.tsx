'use client'
import React from "react";
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Bar,
  Tooltip,
  Legend
} from "recharts";
import {  subMonths } from "date-fns";
import { Typography } from "./tokens/Typography";


type dataType = {
  date: string;
  value: number;
};
const data: dataType[] = [];

for (let num = 12; num > 0; num--) {
  data.push({
    date: subMonths(new Date(), num).toDateString().substring(4, 8),
    value: Number(((5000 )  * num).toFixed(3)),
  });
}
console.log( new Date().setMonth(3))
// console.log(data)


const SalesCharts = () => {
  return (
    <div className={` ${Typography.body_medium.md} text-woodsmoke-600 flex h-full w-full  items-center `}>
         <ResponsiveContainer className={'h-[10rem] sm:h-[95%]'} width={"100%"}>
      <BarChart width={60} data={data} className='rounded-md'>
        <defs>
          <linearGradient
            id="paint0_linear_2132_4600"
            x1="52"
            y1="32"
            x2="52"
            y2="1.90735e-06"
            gradientUnits="userSpaceOnUse"
          >
            <Legend />
            <stop stopColor="#77B900" stopOpacity="0" />
            <stop offset="0.809892" stopColor="#77B900" />
          </linearGradient>
        </defs>
        <Bar
          className='stroke-transparent    fill-green-300/30  rounded-xl'
          radius={[30,30,0,0]}
           maxBarSize={35}
           background={false}
           activeBar={false}
          dataKey={"value"}

        />
        <XAxis axisLine={false} tickLine={false} fontSize={16}  dataKey={"date"} tickCount={12} />
        <YAxis tickFormatter={(number)=>`$${number}`} tickCount={7} axisLine={false} tickLine={false}  dataKey={"value"} />
        <CartesianGrid vertical={false} opacity={0.5} strokeDasharray={6} />
        <Tooltip cursor={true}    wrapperClassName="h-[4rem] w-[8rem]"/>
      </BarChart>
    </ResponsiveContainer>
    </div>
  )
}

export default SalesCharts