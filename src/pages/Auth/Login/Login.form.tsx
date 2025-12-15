import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import type z from "zod";
import Login from "./Login.actions";
import { loginSchema } from "./Login.schema";

export default function LoginForm() {
  const navigate =useNavigate()

  // 1. Define your form.
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof loginSchema>) {
    const res =await Login(values);
    
    if (res.ok) {
      if (res.user.role !== "admin") {
        toast.error("You are not authorized to access this page.");
      }else
      localStorage.setItem("token", res.token);
      toast.success("Login successful");
      console.log(res);
      navigate("/");
    } else {
      toast.error(res.message || "Login failed");
    }
  }

  return (
    <div className="bg-Bg py-10 px-8 rounded-lg shadow-md font-nunito">
      <div className="title text-center mb-9">
        <h2 className="text-text font-bold text-3xl">Login to Account</h2>
        <p className="text-lg font-semibold mt-4 text-text2">Please enter your email and password to continue</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-center">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-text2 text-lg">Email address:</FormLabel>
                <FormControl>
                  <Input placeholder="esteban_schiller@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between items-center">
                <FormLabel className="text-text2 text-lg">Password</FormLabel>
                <Link to={'/forgetPassword'} className="text-text2 text-sm sm:text-lg hover:underline duration-200">Forget Password?</Link>
                </div>
                <FormControl>
                  <Input type="password" placeholder="Enter your password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="primary-btn w-full sm:w-10/12" type="submit">Sign In</Button>
        </form>
      </Form>
    </div>
  )
}
