import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserProfileProps {
  imageUrl?: string; // Opcional
  name?: string; // Opcional
  role?: string; // Opcional
}

const AvatarShad: React.FC<UserProfileProps> = ({
  // Valor por defecto
  name, // Valor por defecto
  role, // Valor por defecto
}) => {
  return (
    <div className="p-4 text-center mx-auto">
      <Avatar>
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h2 className="mt-2 text-lg font-semibold">{name}</h2>
      <p className="text-sm text-sky-300">{role}</p>
    </div>
  );
};
export default AvatarShad;
