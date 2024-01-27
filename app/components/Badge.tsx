import React from "react";
import { Typography } from "./tokens/Typography";
import { Icon } from "@iconify/react";
type Props = {
  profit: number;
};

const Badge = (props: Props) => {
  const profitIndicator = props.profit > 0 
  return (
    <div
      className={` ${props.profit > 0 ? 'bg-[#34CAA5]/15':'bg-[#ED544E]/15' }  w-[70px] h-[24px] py-1 flex ${props.profit > 0 ? 'flex-row':'flex-row-reverse'} items-center justify-center gap-2 rounded-full  `}
    >
      <p className={`${Typography.body_regular.md}  ${profitIndicator ? 'text-[#34CAA5]':'text-[#ED544E]'} `}>
        23%
      </p>

      <Icon
        height={"16px"}
        width={"16px"}
        icon={`mdi:${profitIndicator? 'trending-up':'trending-down'}`}
        color={profitIndicator  ? '#34CAA5' :'#ED544E'}
      />
    </div>
  );
};

export default Badge;
