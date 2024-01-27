import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const SelectComponent = () => {
  return (
    <Select>
      <SelectTrigger className="w-[7rem] rounded-full">
        <SelectValue placeholder="Weekly" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select a Timeframe</SelectLabel>
          <SelectItem value="apple">Weekly</SelectItem>
          <SelectItem value="banana">Monthly</SelectItem>
          <SelectItem value="blueberry">Quarterly</SelectItem>
          <SelectItem value="grapes">Yearly</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectComponent