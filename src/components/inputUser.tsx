//import { Input } from "@mui/material";

interface InputFormUserProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputFormUser: React.FC<InputFormUserProps> = ({
  label,
  type,
  placeholder,
  value,
  name,
  onChange,
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-white">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        className=" border border-transparent rounded bg-gray-600 text-white placeholder-white pl-3 pr-4 py-1 w-full focus:border-white focus:outline-none"
      />
    </div>
  );
};

export default InputFormUser;
