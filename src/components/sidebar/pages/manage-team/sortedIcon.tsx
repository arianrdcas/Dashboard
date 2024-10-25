import { SortDirection } from "@tanstack/react-table";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

const SortedIcon = ({ isSorted }: { isSorted: false | SortDirection }) => {
  if (isSorted === "asc") {
    return <ChevronUpIcon className="h-4 w-4" />;
  }
  if (isSorted === "desc") {
    return <ChevronDownIcon className="h-4 w-4" />;
  }
  return null;
};
export default SortedIcon;
