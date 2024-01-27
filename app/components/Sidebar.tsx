'use client'
import React, { ReactNode } from "react";
import {
  Category,
  Profile2User,
  TrendUp,
  Box,
  DiscountShape,
  InfoCircle,
  ArrowCircleRight2,
  Setting2,
  Logout,
  DocumentDownload,
} from "iconsax-react";
import { iconData, bottomIconData } from "./tokens/icons";
import Home from "../../assets/Home_Logo.svg";
import Sun from "../../assets/Light_Mode.svg";
import Moon from "../../assets/Dark_Mode.svg";

const Sidebar = () => {
  const [active,setActive] = React.useState(false)
  const [active2,setActive2] = React.useState(false)
  const [active3,setActive3] = React.useState(false)
  const [active4,setActive4] = React.useState(false)
  const [active5,setActive5] = React.useState(false)
  const [active6,setActive6] = React.useState(false)
  const [active7,setActive7] = React.useState(false)
  const [active8,setActive8] = React.useState(false)
  const [active9,setActive9] = React.useState(false)
  const [active10,setActive10] = React.useState(false)

  
  const handleChangeActive = () => {
    setActive((previousIcon) => {
      return !previousIcon;
    });
  };

  return (
    <div className="flex bg-[#F7F8FA] items-center justify-between py-8 flex-col w-full">
     <div className=" flex flex-col gap-4">
     <div className=" w-full flex items-center justify-center">
        <Home />
      </div>
      <div className="flex flex-col  gap-10 items-center justify-center">
      <Category onClick={()=>{setActive(!active)}} className="cursor-pointer" variant={active?"Bulk":"Broken"} color={active ? "#0D062D":"#B2ABAB"} />
      <TrendUp onClick={()=>{setActive2(!active2)}}  className="cursor-pointer" variant={active2?"Bulk":"Broken"} color={active2 ? "#0D062D":"#B2ABAB"} />
      <Profile2User onClick={()=>{setActive3(!active3)}}  className="cursor-pointer" variant={active3?"Bulk":"Broken"} color={active3 ? "#0D062D":"#B2ABAB"} />
      <Box onClick={()=>{setActive4(!active4)}}  className="cursor-pointer" variant={active4?"Bulk":"Broken"} color={active4 ? "#0D062D":"#B2ABAB"} />
      <DiscountShape onClick={()=>{setActive5(!active5)}}   className="cursor-pointer" variant={active5?"Bulk":"Broken"}color={active5 ? "#0D062D":"#B2ABAB"} />
      <InfoCircle onClick={()=>{setActive6(!active6)}}  className="cursor-pointer" variant={active6?"Bulk":"Broken"} color={active6 ? "#0D062D":"#B2ABAB"} />
      </div>
      <div className=" flex   flex-col gap-4 w-full items-center justify-center">
        <div className="flex  bg-white flex-col px-3 py-3 gap-4 rounded-full ">
        <Sun />
        <Moon/>
        </div>
      </div>
     </div>

   <div className="flex gap-8 flex-col">
   
      <div className="flex flex-col  gap-6 items-center justify-center">
        {bottomIconData.map((icon, i) => {
          return (
            <div
              className="flex cursor-pointer px-6 py-2 items-center justify-center "
              key={i}
            >
              {icon.icon}
            </div>
          );
        })}
      </div>
   </div>
    </div>
  );
};

export default Sidebar;
