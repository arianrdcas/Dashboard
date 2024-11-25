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

export default function RegisterForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-sm mx-auto border-2 border-black shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Registro de Usuario
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input type="text" placeholder="Nombre" required />
            </div>
            <div>
              <Input type="text" placeholder="Apellido" required />
            </div>
            <div>
              <Input type="email" placeholder="Email" required />
            </div>
            <div>
              <Input type="email" placeholder="Confirme Email" required />
            </div>
            <div>
              <Input type="password" placeholder="Contraseña" required />
            </div>
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
            Ya tienes una cuenta?{" "}
            <Link to="/" className="text-blue-600 hover:underline">
              Inicia sesion
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
