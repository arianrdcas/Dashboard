import { FC } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


const ExampleTable: FC = () => {
    return (
      <Table >
        <TableCaption >
          A list of your recent invoices.
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-black">Invoice</TableHead>
            <TableHead className="text-black">Status</TableHead>
            <TableHead className="text-black">Method</TableHead>
            <TableHead className="text-right text-black">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-white">
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
}

export default ExampleTable;