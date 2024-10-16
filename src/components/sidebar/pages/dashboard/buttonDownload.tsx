import { FC } from "react";
import DownloadIcon from "@mui/icons-material/Download";

const ButtonDownLoad: FC = () => {
  return (
    <button className="text-white font-semibold bg-blue-600 rounded py-1 px-2 text-sm flex items-center">
      <DownloadIcon className="mr-1" />
      Download Reports
    </button>
  );
};

export default ButtonDownLoad;
