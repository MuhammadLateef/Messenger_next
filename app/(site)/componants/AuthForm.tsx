"use client";
import { type } from "os";
import { useCallback, useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import React from "react";
import Input from "@/app/componants/inputs/Input";
import Button from "@/app/componants/Button";
import AuthoSocialButton from "./AuthoSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { Voltaire } from "next/font/google";
type Variant = "LOGIN" | "REGISTER";
const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("REGISTER");
  const [isLoading, setIsLoading] = useState(false);
  const toggleVariant = useCallback(() => {
    if (variant == "LOGIN") {
      setVariant("LOGIN");
    }
  }, [variant]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (variant == "REGISTER") {
      //Axios Register
    }
    if (variant == "LOGIN") {
      //NextAuth SignIn
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
    //nextAuth Social Sign In
  };

  return (
    <div
      className="
    mt-8
    sm:mx-auto
    sm:w-full
    sm:max-w-md

    "
    >
      <div
        className="
     bg-white
     px-4
     py-8
     shadow
     sm:rounded-lg
     sm:px-10
     "
      >
        <form
          className="
         space-y-6
        "
          onSubmit={handleSubmit(onSubmit)}
        >
          {variant == "REGISTER" && (
            <Input
              id="name"
              label="Enter Your Name"
              register={register}
              errors={errors}
              disabled={isLoading}
            />
          )}
          <Input
            id="email"
            label="Enter Your Email"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Input
            id="password"
            label="Enter Your Password"
            type="password"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <div className="">
            <Button disabled={isLoading} fullWidth type="submit">
              {variant == "LOGIN" ? "Sign In" : "Register"}
            </Button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">Or continue</span>
            </div>
          </div>
          <div className="mt-6 flex gap-2 ">
            <AuthoSocialButton
              icon={BsGithub}
              onClick={() => socialAction("github")}
            />
            <AuthoSocialButton
              icon={BsGoogle}
              onClick={() => socialAction("google")}
            />
          </div>
        </div>
        <div className="flex gap-2 text-sm mt-6 px-2 text-gray-500">
          <div>
            {variant == "LOGIN"
              ? "Now to Messenger?"
              : "Already have an account?"}
          </div>
          <div onClick={toggleVariant} className="underline cursor-pointer">
          {variant == "LOGIN" ? "Create an account" : "LOGIN"}
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default AuthForm;
