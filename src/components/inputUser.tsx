import { Input } from "@/components/ui/input";

interface InputFormUserProps {
  required?:boolean
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
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default InputFormUser;
