import InputFormUser from "@/components/inputUser";
import { useState } from "react";

const ProfileForm: React.FC = () => {
  const [formData, setFormData] = useState({
    empresa: "",
    pais: "",
    ciudad: "",
    email: "",
    telefono: "",
    direccion: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <h1 className="text-black font-semibold text-3xl">CREATE USER</h1>
      <p className="text-black mt-2 text-sm">Create a new user profile</p>
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <InputFormUser
            label="Empresa"
            type="text"
            placeholder="Empresa"
            name="empresa" // <-- Esto es importante
            value={formData.empresa}
            onChange={handleInputChange}
          />
          <InputFormUser
            label="Pais"
            type="text"
            placeholder="Pais"
            name="pais" // <-- Esto es importante
            value={formData.pais}
            onChange={handleInputChange}
          />
          <InputFormUser
            label="Ciudad"
            type="text"
            placeholder="Ciudad"
            name="ciudad" // <-- Esto es importante
            value={formData.ciudad}
            onChange={handleInputChange}
          />
          <InputFormUser
            label="Email"
            type="text"
            placeholder="Email"
            name="email" // <-- Esto es importante
            value={formData.email}
            onChange={handleInputChange}
          />
          <InputFormUser
            label="Telefono"
            type="text"
            placeholder="Telefono"
            name="telefono" // <-- Esto es importante
            value={formData.telefono}
            onChange={handleInputChange}
          />
          <InputFormUser
            label="Direccion"
            type="text"
            placeholder="Direccion"
            name="direccion" // <-- Esto es importante
            value={formData.direccion}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex  justify-center items-center">
          <button
            type="submit"
            className="w-full md:w-[50%] mt-8 p-2 bg-blue-500 text-white rounded"
          >
            Enviar
          </button>
        </div>
      </form>
    </>
  );
};
export default ProfileForm;
