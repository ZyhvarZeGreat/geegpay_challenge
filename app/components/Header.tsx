import React from "react";
import { Bell, Calendar, Magnifer } from "solar-icon-set";
import { Input } from "@/components/ui/input";
import DialogBox from "./DialogBox";
import { Inter } from "next/font/google";
import { Typography } from "../components/tokens/Typography";
const Header = () => {
  const date = new Date().toDateString().substring(4).split(' ')
  const formattedDate = (`${date[0]} ${date[1]}, ${date[2]}`)
  return (
    <div>
      <div className="bg-white  shadow-sm flex items-center justify-between px-16 py-6 w-full border-b-woodsmoke-400">
        <div>
          <h1 className={`${Typography.headers.h4}`}>Dashboard</h1>
        </div>
        <div className="flex gap-12 items-center justify-center ">
          <div className=" flex bg-white  justify-center border rounded-full h-[48px] w-[350px] items-center ">
            <Magnifer size={20} color="#78828A" />
            <Input
              className={` focus-visible:ring-0 focus-visible:border-0 ${Typography.Inter.className} font-light w-[80%] shadow-none text-woodsmoke-400 border-none`}
              placeholder="Search..."
            />
          </div>
          <div className="flex gap-8 items-center justify-center">
            <div className="flex gap-2 items-center justify-center">
              <Calendar iconStyle={'Outline'} size={20} />
              <p className={`${Typography.body_medium.md} ${Typography.Inter.className}`}>{formattedDate}</p>
            </div>

            <div className=" h-[40px] w-[40px] rounded-full border flex items-center justify-center border-woodsmoke-500/30">
              <Bell iconStyle="Outline" size={20} />
            </div>
          </div>

          <div>
            <DialogBox/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
