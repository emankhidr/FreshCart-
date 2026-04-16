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
    <form className="w-2/3 mx-auto my-5" onSubmit={handleSubmit(handleRegister)}>
      <FieldGroup>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input {...field} id="name" />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input {...field} id="email" type="email" />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input {...field} id="password" type="password" />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="rePassword"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="rePassword">Confirm Password</FieldLabel>
              <Input {...field} id="rePassword" type="password" />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="phone"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="phone">Phone</FieldLabel>
              <Input {...field} id="phone" type="tel" />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>

      <Button className="my-5">
        {isLoading ? <Spinner /> : "Register"}
      </Button>
    </form>
  );
}