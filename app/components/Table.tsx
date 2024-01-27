import React, { ReactNode } from "react";
import { Typography } from "./tokens/Typography";
import { DocumentDownload } from "iconsax-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { tableData } from "../services/tableData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
type tableType = {
  user: string;
  date: string;
  amount: number;
  avatar_image: string;
  status: string;
  invoiceIcon: ReactNode;
};
const statusFormatter = (status: string) => {
  switch (status) {
    case "Paid":
      return "text-success";
    case "Refund":
      return "text-error";
    case "Pending":
      return "text-warning";
    default:
      return "text-black";
  }
};

const tableBodyData: tableType[] = tableData;

const tableBody = tableBodyData.map((row, i) => {
  const userString = row.user.split(" ");
  const fallback = userString[0].slice(0, 1) + userString[1].slice(0, 1);
  return (
    <TableRow  key={i} className={` text-[2rem]   ${Typography.body_medium.lg}`}>
      <TableCell className="font-medium flex  items-center justify-start gap-2">
        <Avatar>
          <AvatarFallback>{fallback}</AvatarFallback>
          <AvatarImage className="h-8 w-8" src={row.avatar_image} />
        </Avatar>
        <p> {row.user}</p>
      </TableCell>
      <TableCell className=" text-woodsmoke-500">
        <p>{row.date}</p>
      </TableCell>
      <TableCell className=" font-semibold">
        <p>${row.amount}</p>
      </TableCell>
      <TableCell className={`text-left font-normal `}>
        <p className={`${statusFormatter(row.status)}`}>{row.status}</p>
      </TableCell>
      <TableCell className="text-left flex gap-2 items-center">
        <DocumentDownload />
        <p>View</p>
      </TableCell>
    </TableRow>
  );
});

const TableComponent = () => {
  return (
    <Table className="w-full h-full bg-blue-500">
      <TableHeader>
        <TableRow>
          <TableHead
            className={`${Typography.body_medium.lg} w-[300px] text-[#9cafab]`}
          >
            Name
          </TableHead>
          <TableHead
            className={`${Typography.body_medium.lg} text-[#9cafab] text-left`}
          >
            Date
          </TableHead>
          <TableHead
            className={`${Typography.body_medium.lg} text-[#9cafab] text-left`}
          >
            Amount
          </TableHead>
          <TableHead
            className={`${Typography.body_medium.lg} text-[#9cafab] text-left`}
          >
            Status
          </TableHead>
          <TableHead
            className={`${Typography.body_medium.lg} text-[#9cafab] text-left`}
          >
            Invoice
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="overflow-y-scroll">{tableBody}</TableBody>
    </Table>
  );
};

export default TableComponent;
