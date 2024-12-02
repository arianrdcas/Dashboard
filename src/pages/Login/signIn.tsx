import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

type Inputs = {
  userName: string,
  password:string
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset(); // Limpia el formulario tras el envío
  };

  

  const fields = [
    {
      name: "userName",
      type: "text",
      placeholder: "Nombre de usuario",
      validations: {
        required: "Nombre de usuario es requerido",
      }
    },
{
      name: "password",
      type: "password",
      placeholder: "Contraseña",
    },
  ]
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-sm mx-auto border-2 border-black shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Inicia sesion
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {fields.map(({ name, type, placeholder, validations }) => (
              <div key={name}>
                <Input
                  type={type}
                  placeholder={placeholder}
                  {...register(name as keyof Inputs, validations)}
                />
                {errors[name as keyof Inputs] && (
                  <span className="text-red-600 text-sm">
                    {errors[name as keyof Inputs]?.message}
                  </span>
                )}
              </div>
            ))}
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
};

