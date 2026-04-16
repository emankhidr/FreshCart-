"use client";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { signIn } from "next-auth/react";
import { FaFacebook, FaGoogle, FaHeadphones, FaLock, FaTruck } from "react-icons/fa";
import Link from "next/link";
import { loginSchema, loginSchemaType } from "./Schema/LoginSchema";

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const { handleSubmit, control } = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      
      email: "",
      password: "",
      
    },
  });
  async function handleLogin(data: loginSchemaType) {
    setLoading(true);
    try {
     const isSuccessfulLogin = await signIn("credentials",{redirect:false,...data})
      
     
      if (isSuccessfulLogin?.ok) {
        toast.success("Logged in successfully", {
          position: "top-right",
        });
        setTimeout(() => {
          router.push("/");
        }, 500);
      }else{
        toast.success("incorrect email or password", {
          position: "top-right",
        });
      }
    } catch (error: any) {
      toast.error(error?.message, {
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
    
      <div className=" min-h-screen flex items-center justify-center">
       
          <div className="p-10">
            

            <form className="w-full" onSubmit={handleSubmit(handleLogin)}>
              <FieldGroup>
                <Controller
                  name="email"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="email">Email</FieldLabel>
                      <Input
                        {...field}
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="border border-gray-400"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="password"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <div className="flex justify-between items-center">
                        <FieldLabel htmlFor="password">Password</FieldLabel>
                      </div>

                      <Input
                        {...field}
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="border border-gray-400"
                      />

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </FieldGroup>

              <Button className="w-full my-5 bg-green-600">
                {isLoading ? <Spinner /> : "Sign In"}
              </Button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-5">
              New to FreshCart?{" "}
              <Link href="/register">
                <span className="text-green-600 cursor-pointer">
                  Create an account
                </span>
              </Link>
            </p>

           
          </div>
        </div>
      </div>
  );
}