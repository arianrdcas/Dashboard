import { Button } from "@/components/ui/button";
import InputFormUser from "@/components/inputUser";
import { useState } from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";


const LoginForm:React.FC = () => {
  const [loginData, setLoginData] = useState({
    email:"",
    password:""
  })

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = event.target;
  setLoginData({
    ...loginData,
    [name]: value,
  });
  if (errors[name as keyof typeof errors]) {
    setErrors({
      ...errors,
      [name]: "",
    });
  }
};

const handleSubmit = (event: React.FormEvent) => {
  event.preventDefault();
  const newErrors = { email: "", password: "" };
  if (!loginData.email) {
    newErrors.email = "El email es requerido.";
  }

  if (!loginData.password) {
    newErrors.password = "La contraseña es requerida.";
  }

  if (newErrors.email || newErrors.password) {
    setErrors(newErrors);
    return;
  }

  console.log("Datos enviados:", loginData);
};

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-sm mx-auto border-2 border-black shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Inicia sesion
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <InputFormUser
                label="Email"
                type="email"
                placeholder="Email"
                name="email"
                value={loginData.email}
                onChange={handleInputChange}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <InputFormUser
                label="password"
                type="password"
                placeholder="Contraseña"
                name="password"
                value={loginData.password}
                onChange={handleInputChange}
                required
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            <Button type="submit" className="w-full">
              Inicia sesion
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="flex space-x-2 w-full">
            <Button variant="outline" className="flex-1">
              Ingresa con Google
            </Button>
            <Button variant="outline" className="flex-1">
              Ingresa con Facebook
            </Button>
          </div>
          <div className="text-center text-sm">
            Ya tienes una cuenta?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Registrate
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
export default LoginForm;