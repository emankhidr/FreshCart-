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
import {
  FaFacebookF,
  FaGoogle,
  FaEnvelope,
  FaLock,
  FaTruck,
  FaRegClock,
  FaStar,
  FaUsers,
} from "react-icons/fa";
import Link from "next/link";
import { loginSchema, loginSchemaType } from "./Schema/LoginSchema";
import loginImage from "../../../../assets/img2.png";
import { IoShieldHalfOutline } from "react-icons/io5";

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
      const isSuccessfulLogin = await signIn("credentials", {
        redirect: false,
        ...data,
      });

      if (isSuccessfulLogin?.ok) {
        toast.success("Logged in successfully", {
          position: "top-right",
        });

        setTimeout(() => {
          router.push("/");
        }, 500);
      } else {
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
    <div className="min-h-screen flex m-5 bg-white gap-6 mt-3">
      
      {/* LEFT SIDE */}
      <div className="w-1/2 flex flex-col justify-center border-r border-gray-200 pr-8">
        <div className="w-full max-w-[430px] mx-auto">
          
          <img
            src={loginImage.src}
            alt="freshcart"
            className="w-[320px] h-[350px] object-contain rounded-2xl shadow-md mx-auto"
          />

          <div className="mt-5 text-center">
            <h2 className="text-[26px] font-bold text-gray-700 leading-10">
              FreshCart - Your One-Stop Shop for Fresh Products
            </h2>

            <p className="text-gray-500 mt-3 leading-7 text-[15px] px-3">
              Join thousands of happy customers who trust FreshCart
              for their daily grocery needs
            </p>

            <div className="flex items-center justify-center gap-6 mt-5">
              
              <div className="flex flex-col items-center gap-2 ">
                <div className="bg-green-100 size-10 rounded-full flex items-center justify-center">
                  <FaTruck className="text-green-600 text-sm" />
                </div>

                <p className="text-gray-600 text-sm">
                  Free Delivery
                </p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="bg-green-100 size-10 rounded-full flex items-center justify-center">
                  <IoShieldHalfOutline className="text-green-600 text-lg" />
                </div>

                <p className="text-gray-600 text-sm">
                  Secure Payment
                </p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="bg-green-100 size-10 rounded-full flex items-center justify-center">
                  <FaRegClock className="text-green-600 text-sm" />
                </div>

                <p className="text-gray-600 text-sm">
                  24/7 Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 flex items-center justify-center px-8 ">
        <div className="w-full max-w-[400px]">
          
          <h1 className="text-4xl font-bold text-green-600 text-center ">
            Fresh<span className="text-gray-700">Cart</span>
          </h1>

          <h2 className="text-3xl font-bold text-gray-700 text-center mt-6">
            Welcome Back
          </h2>

          <p className="text-gray-500 text-center mt-3">
            Sign in to continue your fresh shopping experience
          </p>

          {/* SOCIAL BUTTONS */}
          <div className="mt-8 space-y-4">
            
            <button
              type="button"
              className="w-full border border-gray-300 py-4 flex items-center justify-center gap-3 text-gray-700 font-medium hover:bg-gray-50 duration-300"
            >
              <FaGoogle className="text-red-500 text-lg" />

              Continue with Google
            </button>

            <button
              type="button"
              className="w-full border border-gray-300 py-4 flex items-center justify-center gap-3 text-gray-700 font-medium hover:bg-gray-50 duration-300"
            >
              <FaFacebookF className="text-blue-600 text-lg" />

              Continue with Facebook
            </button>
          </div>

          {/* DIVIDER */}
          <div className="flex items-center gap-4 my-7">
            <div className="flex-1 h-[1px] bg-gray-300"></div>

            <p className="text-gray-600 text-sm mt-2">
              OR CONTINUE WITH EMAIL
            </p>

            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* FORM */}
          <form className="w-full" onSubmit={handleSubmit(handleLogin)}>
            <FieldGroup className="space-y-5">

              {/* EMAIL */}
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    
                    <FieldLabel
                      htmlFor="email"
                      className="text-gray-700 mb-2 mt-1"
                    >
                      Email Address
                    </FieldLabel>

                    <div className="relative">
                      
                      <FaEnvelope className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 ml-4" />

                      <Input
                        {...field}
                        id="email"
                        type="email"
                        placeholder="        Enter your email"
                        className="border border-gray-300 rounded-2xl h-14 pl-14 py-4  text-sm  focus-visible:ring-0 focus-visible:border-green-600"
                      />
                    </div>

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* PASSWORD */}
              <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    
                    <div className="flex items-center justify-between mb-2">
                      
                      <FieldLabel
                        htmlFor="password"
                        className="text-gray-700"
                      >
                        Password
                      </FieldLabel>

                      <p className="text-green-600 text-sm cursor-pointer hover:underline">
                        Forgot Password?
                      </p>
                    </div>

                    <div className="relative">
                      
                      <FaLock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 ml-4" />

                      <Input
                        {...field}
                        id="password"
                        type="password"
                        placeholder="       Enter your password"
                        className="border rounded-2xl border-gray-300 h-14 pl-14 text-sm py-4  focus-visible:ring-0 focus-visible:border-green-600"
                      />
                    </div>

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>

            {/* CHECKBOX */}
            <div className="flex items-center gap-3 mt-5">
              
              <input
                type="checkbox"
                className="accent-green-600 size-4 cursor-pointer"
              />

              <p className="text-gray-600 text-sm">
                Keep me signed in
              </p>
            </div>

            {/* BUTTON */}
            <Button className="w-full mt-5 bg-green-600 hover:bg-green-700 h-14 p-4 text-base rounded-2xl font-medium  border border-green-600 focus-visible:ring-0 focus-visible:border-green-700">
              {isLoading ? <Spinner /> : "Sign In"}
            </Button>
          </form>

          {/* REGISTER */}
          <p className="text-center text-gray-500 mt-5">
            New to FreshCart?{" "}
            
            <Link href="/register">
              <span className="text-green-600 font-medium hover:underline cursor-pointer">
                Create an account
              </span>
            </Link>
          </p>

          {/* BOTTOM INFO */}
          <div className="flex items-center justify-center gap-6 mt-5">
            
            <div className="flex items-center gap-2">
              <FaLock className="text-green-600 text-sm" />

              <p className="text-gray-500 text-sm">
                SSL Secured
              </p>
            </div>

            <div className="flex items-center gap-2">
              <FaUsers className="text-green-600 text-sm" />

              <p className="text-gray-500 text-sm">
                50K+ Users
              </p>
            </div>

            <div className="flex items-center gap-2">
              <FaStar className="text-green-600 text-sm" />

              <p className="text-gray-500 text-sm">
                4.9 Rating
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}