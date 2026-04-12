'use client'
import { Button } from "@/components/ui/button"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Spinner } from "@/components/ui/spinner"
import { loginSchema, loginSchemaType } from './Schema/LoginSchema';
import { loginFn } from "./actions/Login.action"
import { signIn } from "next-auth/react"

export default function RegisterForm() {
  const router = useRouter();
  const [isLoading,setLoading] = useState(false)
 
  const { handleSubmit, control,reset } = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
   
      email: '',
      password: '',
    
    }
  })

  async function handleLogin(data: loginSchemaType) {
    setLoading(true)
    try {
      const isSucessfulRegister = await signIn('credentials',{
        redirect:false, ...data
      })

      if (isSucessfulRegister?.ok ) {
        toast.success('login successfully', {
          position: 'top-right'
        })

        setTimeout(() => {
          router.push('/')
        }, 500)
        reset()
      }
      else{
        toast.success('incorrect email or password', {
          position: 'top-right'
        })

      }
    } catch (error: any) {
      toast.error(error?.message, {
        position: 'top-right'
      })
    }
    finally{
      setLoading(false)
    }
  }

  return (
    <div>
      <form className="w-2/3 mx-auto my-5" onSubmit={handleSubmit(handleLogin)}>
        <FieldGroup>

          

          {/* email */}
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="email">email</FieldLabel>
                <Input {...field} id="email" type="email" aria-invalid={fieldState.invalid} placeholder="email" autoComplete="off" />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* password */}
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="password">password</FieldLabel>
                <Input {...field} id="password" type="password" aria-invalid={fieldState.invalid} placeholder="password" autoComplete="off" />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

         

        </FieldGroup>

       
        <Button className="my-5">
          {isLoading?<Spinner/>:'Login'}
        </Button>

      </form>
    </div>
  )
} 