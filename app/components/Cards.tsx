"use client";
import React ,{ReactNode}from "react";
import Chart from "./Chart";
import Badge from "./Badge";
// import { Box } from "iconsax-react";
import { Typography } from "./tokens/Typography";
import Image from "next/image";
import Box from '../assets/box-tick.svg'
type Props = {
  metric: number | string | boolean;
  profit: number;
  icon: ReactNode
};

const Cards = (props: Props) => {
  return (
    <div className="  h-[14.4rem] border-[0.5px] border-woodsmoke-500/10  flex items-center justify-center flex-col rounded-lg  w-full px-2 col-span-12 lg:col-span-6">
      <div className=" h-full flex flex-col justify-center items-center   gap-4 ">
        <div className="  flex items-center justify-between px-4 w-full">
          <div className=" h-6 w-6 flex items-center  justify-center">
            <div className=" flex items-center justify-center px-4 py-4 rounded-full border-[0.5px] border-woodsmoke-500/10 ">
          {props.icon}
            </div>
          </div>
          <Chart profit={props.profit} />
        </div>

        <div className="flex  flex-col w-full px-4">
          <div className="flex flex-col  justify-around  gap-2 w-full">
            <div className="flex flex-col  gap-1">
              <p className={`${Typography.body_medium.xl} text-woodsmoke-400`}>
                Total Order
              </p>
              <h3 className={`${Typography.headers.h3}`}>{props.metric}</h3>
            </div>

            <div className="flex w-full items-center justify-center gap-4">
              {props.profit > 0 ? (
                <Badge  profit={props.profit} />
              ) : (
                <Badge  profit={props.profit} />
              )}
              <p className={`${Typography.Inter}`}> vs.previous month </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
