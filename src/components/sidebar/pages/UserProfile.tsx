import React from "react";

interface UserProfileProps {
  imageUrl?: string; // Opcional
  name?: string; // Opcional
  role?: string; // Opcional
}

const UserProfile: React.FC<UserProfileProps> = ({
  imageUrl,  // Valor por defecto
  name, // Valor por defecto
  role // Valor por defecto
}) => {
  return (
    <div className="p-4 text-center">
      <img
        src={imageUrl}
        alt={`${name}'s profile`}
        className="w-16 h-16 rounded-full mx-auto"
      />
      <h2 className="mt-2 text-lg font-semibold">{name}</h2>
      <p className="text-sm text-sky-300">{role}</p>
    </div>
  );
};

export default UserProfile;
