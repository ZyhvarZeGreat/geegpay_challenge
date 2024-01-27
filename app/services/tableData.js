import { DocumentDownload } from "iconsax-react"
const date = new Date().toDateString().substring(4).split(" ");
const formattedDate = `${date[0]} ${date[1]} , ${date[2]}`;

export const tableData = [
    {
        user: "Marcus Bergson",
        date: formattedDate,
        amount: 80000,
        avatar_image: "",
        status: "Pending",
        invoiceIcon: <DocumentDownload />
    },

    {
        user: "Jaydon Vaccaro",
        date: formattedDate,
        amount: 150000,
        avatar_image: "",
        status: "Paid",
        invoiceIcon: <DocumentDownload />
    },

    {
        user: "Corey Schleifer",
        date: formattedDate,
        amount: 87000,
        avatar_image: "",
        status: "Refund",
        invoiceIcon: <DocumentDownload />
    },

    {
        user: "Cooper Press",
        date: formattedDate,
        amount: 100000,
        avatar_image: "",
        status: "Paid",
        invoiceIcon: <DocumentDownload />
    },

    {
        user: "Phillip Lubin",
        date: formattedDate,
        amount: 78000,
        avatar_image: "",
        status: "Refund",
        invoiceIcon: <DocumentDownload />
    },
]