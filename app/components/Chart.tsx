"use client";
import React from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Area,
} from "recharts";
import { format, parseISO, subDays } from "date-fns";
type ChartProps = {
  profit: number;
};

type dataType = {
  date: string;
  value: number;
};
const data: dataType[] = [];

for (let num = 50; num >= 25; num--) {
  data.push({
    date: subDays(new Date(), num).toISOString().substring(0, 10),
    value: Number((num * Math.random() + 2).toFixed(3)),
  });
}



const Chart = (props:ChartProps) => {
  return (
    <ResponsiveContainer width="60%" height={40}>
      <AreaChart width={60} data={data}>
        <defs>
        <linearGradient id="value" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
        </defs>
        <Area
        stroke={props.profit > 0 ? '#66C87B':'#ED544E'}
          dataKey={"value"}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
