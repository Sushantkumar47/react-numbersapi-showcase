import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom"; // for redirection

type FormValues = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    if (data.email === "sushantKumar@gmail.com" && data.password === "123456") {
      toast.success("Welcome back!", { position: "top-right" });
      setTimeout(() => {
        navigate("/landing"); // change to your actual landing route
      }, 1500); // wait for toast
    } else {
      toast.error("Invalid credentials", { position: "top-right" });
    }
  };

  const onError = () => {
    if (errors.email && errors.password) {
      toast.error("Email and Password are required", { position: "top-right" });
    } else if (errors.email) {
      toast.error("Email is required", { position: "top-right" });
    } else if (errors.password) {
      toast.error("Password is required", { position: "top-right" });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Login</h2>

      <label>Email</label>
      <input
        type="email"
        placeholder="you@example.com"
        {...register("email", { required: true })}
      />

      <label>Password</label>
      <input
        type="password"
        placeholder="••••••••"
        {...register("password", { required: true })}
      />

      <button type="submit">Log In</button>
    </form>
  );
}
