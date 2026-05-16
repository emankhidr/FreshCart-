'use client'

import { Button } from '@/components/ui/button';
import { Spinner } from "@/components/ui/spinner";
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerFn } from '../actions/register.action';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { registerSchema, registerSchemaType } from '../Schema/register.schema';

import {
  FaGoogle,
  FaFacebookF,
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaStar,
} from "react-icons/fa";

import img3 from "../../../../assets/img3.png";
import Link from 'next/link';

export default function RegisterForm() {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);

  const { handleSubmit, control, reset } = useForm<registerSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      rePassword: '',
      phone: ''
    }
  });

  async function handleRegister(data: registerSchemaType) {
    setLoading(true);
    try {
      const isSuccessfulRegister = await registerFn(data);

      if (isSuccessfulRegister) {
        toast.success("Registered successfully");
        setTimeout(() => {
          router.push("/login");
        }, 500);
        reset();
      }
    } catch (error: any) {
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex m-5 bg-white gap-6 mt-3 pb-10 items-start">

      {/* LEFT SIDE (FIXED ALIGN TOP) */}
      <div className="w-1/2 flex flex-col justify-start border-r border-gray-200 pr-8 pt-4">
        <div className="w-full max-w-[450px]">

          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            Welcome to <span className="text-green-600">FreshCart</span>
          </h1>

          <p className="text-gray-500 mt-3 text-sm leading-6">
            Join thousands of happy customers who enjoy fresh groceries delivered right to their doorstep.
          </p>

          <div className="mt-6 space-y-4">

            <div className="flex items-start gap-3 py-1">
              <div className="bg-green-100 text-green-600 p-3 rounded-full">
                <FaUser />
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Premium Quality</h4>
                <p className="text-sm text-gray-500">Products sourced from trusted suppliers</p>
              </div>
            </div>

            <div className="flex items-start gap-3 py-1">
              <div className="bg-green-100 text-green-600 p-3 rounded-full">
                <FaPhone />
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Fast Delivery</h4>
                <p className="text-sm text-gray-500">Same-day delivery available in most areas</p>
              </div>
            </div>

            <div className="flex items-start gap-3 py-1">
              <div className="bg-green-100 text-green-600 p-3 rounded-full">
                <FaLock />
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Secure Shopping</h4>
                <p className="text-sm text-gray-500">Your data and payments are safe</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-white border rounded-2xl p-4 shadow-sm">

            <div className="flex items-center gap-3">

              <img
                src={img3.src}
                alt="register"
                className="w-[60px] h-[60px] object-cover rounded-full"
              />

              <div className="flex flex-col">

                <p className="text-sm font-semibold text-gray-700">
                  Sarah Johnson
                </p>

                <div className="flex gap-1 mt-1 text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

              </div>
            </div>

            <p className="text-2xl text-gray-600 italic mt-3">
              "FreshCart has transformed my shopping experience. The quality of products is outstanding, and the delivery is always on time, Highly recommend!"
            </p>

          </div>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 flex items-center justify-center px-8 shadow-2xl">
        <div className="w-full max-w-[420px] pb-10">

          <h2 className="text-3xl font-bold text-gray-800 text-center ">
            Create Your Account
          </h2>

          <p className="text-gray-500 text-center mt-2">
            Start your fresh journey with us today
          </p>

          {/* SOCIAL */}
          <div className="mt-6 flex justify-between gap-5">

            <button className="w-1/2 border rounded-xl flex items-center justify-center gap-2 py-2 h-12 hover:bg-gray-50">
              <FaGoogle className="text-red-500" />
              Google
            </button>

            <button className="w-1/2 border rounded-xl flex items-center justify-center gap-2 py-2 h-12 hover:bg-gray-50">
              <FaFacebookF className="text-blue-600" />
              Facebook
            </button>

          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit(handleRegister)} className="space-y-4 py-2">

            <Controller
              name="name"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="py-1">
                  <FieldLabel>Name</FieldLabel>
                  <div className="relative">
                    <Input {...field} className="h-12 pl-10 rounded-xl py-4" />
                  </div>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="py-1">
                  <FieldLabel>Email</FieldLabel>
                  <div className="relative">
                    <Input {...field} type="email" className="h-12 pl-10 rounded-xl py-4" />
                  </div>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="py-1">
                  <FieldLabel>Password</FieldLabel>
                  <div className="relative">
                    <Input {...field} type="password" className="h-12 pl-10 rounded-xl py-4" />
                  </div>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="rePassword"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="py-1">
                  <FieldLabel>Confirm Password</FieldLabel>
                  <div className="relative">
                    <Input {...field} type="password" className="h-12 pl-10 rounded-xl py-4" />
                  </div>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="phone"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="py-1">
                  <FieldLabel>Phone</FieldLabel>
                  <div className="relative">
                    <Input {...field} type="tel" className="h-12 pl-10 rounded-xl py-4" />
                  </div>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <input type="checkbox" />
              I agree to Terms and Privacy Policy
            </div>

            <Button className="w-full h-12 bg-green-600 hover:bg-green-700 rounded-xl py-4">
              {isLoading ? <Spinner /> : "Create Account"}
            </Button>

          </form>

          {/* SIGN IN FIXED */}
          <p className="text-center text-gray-500 mt-6 pb-6">
            Already have an account?{" "}
            <Link href="/login">
              <span className="text-green-600 font-medium hover:underline cursor-pointer">
                Sign in
              </span>
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}