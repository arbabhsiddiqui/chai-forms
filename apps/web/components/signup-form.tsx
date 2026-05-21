"use client"

import { useForm } from "react-hook-form"

import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import { Card, CardContent } from "~/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "~/components/ui/field"
import { Input } from "~/components/ui/input"
import { useSignUp } from "~/hooks/api/auth"

type SignupFormValues = {
  fullName: string
  email: string
  password: string
  confirmPassword: string
}

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {


  const { createUserWithEmailAndPasswordAsync, isError, isSuccess } = useSignUp()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>()

  const onSubmit = async (data: SignupFormValues) => {
    console.log("Form Data:", data)
    await createUserWithEmailAndPasswordAsync(data)
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-6 md:p-8"
          >
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">
                  Create your account
                </h1>

                <p className="text-sm text-balance text-muted-foreground">
                  Enter your details below to create your account
                </p>
              </div>

              <Field>
                <FieldLabel htmlFor="fullName">
                  Full Name
                </FieldLabel>

                <Input
                  id="fullName"
                  placeholder="John Doe"
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                />

                {errors.fullName && (
                  <p className="text-sm text-red-500">
                    {errors.fullName.message}
                  </p>
                )}
              </Field>

              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>

                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register("email", {
                    required: "Email is required",
                  })}
                />

                <FieldDescription>
                  We&apos;ll use this to contact you. We will not
                  share your email with anyone else.
                </FieldDescription>

                {errors.email && (
                  <p className="text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </Field>

              <Field>
                <div className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="password">
                      Password
                    </FieldLabel>

                    <Input
                      id="password"
                      type="password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message:
                            "Password must be at least 6 characters",
                        },
                      })}
                    />

                    {errors.password && (
                      <p className="text-sm text-red-500">
                        {errors.password.message}
                      </p>
                    )}
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="confirmPassword">
                      Confirm Password
                    </FieldLabel>

                    <Input
                      id="confirmPassword"
                      type="password"
                      {...register("confirmPassword", {
                        required:
                          "Please confirm your password",
                      })}
                    />

                    {errors.confirmPassword && (
                      <p className="text-sm text-red-500">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </Field>
                </div>

                <FieldDescription>
                  Password must be at least 8 characters
                  long.
                </FieldDescription>
              </Field>

              <Field>
                <Button type="submit" className="w-full">
                  Create Account
                </Button>
              </Field>

              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                Or continue with
              </FieldSeparator>

              <Field className="grid grid-cols-3 gap-4">
                <Button variant="outline" type="button">
                  Apple
                </Button>

                <Button variant="outline" type="button">
                  Google
                </Button>

                <Button variant="outline" type="button">
                  Meta
                </Button>
              </Field>

              <FieldDescription className="text-center">
                Already have an account?{" "}
                <a href="#">Sign in</a>
              </FieldDescription>
            </FieldGroup>
          </form>

          <div className="relative hidden bg-muted md:block">
            <img
              src="/placeholder.svg"
              alt="Signup illustration"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>

      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our{" "}
        <a href="#">Terms of Service</a> and{" "}
        <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}
