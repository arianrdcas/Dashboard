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
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  country: string;
};

export default function RegisterForm() {
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

  const password = watch("password", ""); // Observa la contraseña directamente

  // Configuración de campos e inputs
  const fields = [
    {
      name: "name",
      type: "text",
      placeholder: "Nombre",
      validations: {
        required: "Nombre es requerido",
        minLength: {
          value: 2,
          message: "Nombre debe ser mayor a 2 caracteres",
        },
        maxLength: {
          value: 20,
          message: "Nombre no debe ser mayor a 20 caracteres",
        },
      },
    },
    {
      name: "lastName",
      type: "text",
      placeholder: "Apellido",
      validations: {
        required: "Apellido es requerido",
        minLength: {
          value: 2,
          message: "Apellido debe ser mayor a 2 caracteres",
        },
        maxLength: {
          value: 20,
          message: "Apellido no debe ser mayor a 20 caracteres",
        },
      },
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email",
      validations: {
        required: "El email es requerido",
        pattern: {
          value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
          message: "Correo no válido",
        },
      },
    },
    {
      name: "password",
      type: "password",
      placeholder: "Contraseña",
      validations: {
        required: "Contraseña requerida",
        pattern: {
          value:
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/, //Ari@n061988
          message:
            "La contraseña debe tener entre 8 y 20 caracteres, al menos una letra mayúscula, una letra minúscula, un número y un un carácter especial",
        },
      },
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirmar Contraseña",
      validations: {
        required: "Confirmar contraseña es requerido",
        validate: (value: string) =>
          value === password || "Las contraseñas no coinciden",
      },
    },
    {
      name: "country",
      type: "text",
      placeholder: "País",
      validations: {
        required: "País requerido",
      },
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-sm mx-auto border-2 border-black shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Registro de Usuario
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
              Registro
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
            ¿Ya tienes una cuenta?{" "}
            <Link to="/" className="text-blue-600 hover:underline">
              Inicia sesión
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
