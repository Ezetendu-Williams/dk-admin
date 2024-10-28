import { Image } from "@mantine/core";
import PrimaryButton from "../../components/custom/Buttons/PrimaryButton";
import { object, string } from "yup";
import ERRORS from "../../data/Errors";
import { useNavigate } from "react-router-dom";
import InputErrors from "../../components/errors/InputError";
import LoadingOverlay from "../../components/custom/Loader/LoadingOverlay";
import FadeDown from "../../components/animations/FadeDown";
import { loginAPI } from "../../services/api/Auth";
import { TLoginPayload } from "../../types/Auth";
import { SUCCESS_CODE, USER_DETAILS } from "../../data/Constants";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { PasswordInput, TextInput } from "@mantine/core";
import { useLayoutEffect } from "react";
import clearAllCookies from "../../utils/ClearAllCookies";
import { useQueryClient } from "@tanstack/react-query";

type TLoginFormProps = {
  email: string;
  password: string;
};

export default function Login() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const validationSchema = object().shape({
    email: string()
      .trim()
      .email(ERRORS.email)
      .required(ERRORS.required("email")),
    password: string()
      .trim()
      .min(5, ERRORS.passwordLengthValidation)
      .required(ERRORS.required("email")),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid, errors },
  } = useForm<TLoginFormProps>({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<TLoginFormProps> = async (data) => {
    const payload: TLoginPayload = {
      userName: data?.email,
      password: data?.password,
    };
    const response = await loginAPI(payload);
    if (response?.responseDto?.code === SUCCESS_CODE) {
      sessionStorage.setItem(USER_DETAILS, JSON.stringify(response));
      reset();
      navigate("/dashboard/dashboard");
    }
  };

  useLayoutEffect(() => {
    sessionStorage.clear();
    localStorage.clear();
    clearAllCookies();
    queryClient.clear();
  }, [queryClient]);

  return (
    <main className="w-screen h-screen grid place-content-center bg-white relative">
      <LoadingOverlay isLoading={isSubmitting} />
      <div className="lg:w-[450px] w-[95vw] flex flex-col gap-3 items-center">
        <FadeDown>
          <Image src="/logo.png" alt="Logo" width={85} height={95} />
        </FadeDown>

        <FadeDown delay={0.1}>
          <h3 className="text-center lg:text-[30px] md:text-[25px] text-[20px] font-semibold text-primaryBlack">
            Admin Dashboard
          </h3>
        </FadeDown>

        <FadeDown delay={0.2}>
          <p className="text-[#667085] lg:text-[18px] md:text-[16px] text-[12px] text-center">
            We’d love to hear how we can leverage the internet to solving your
            problems. Please fill out this form.
          </p>
        </FadeDown>

        <div className="w-full">
          <FadeDown delay={0.3}>
            <p className="text-primaryRed lg:text-[18px] md:text-[14px] text-[11px] text-center font-medium">
              Login
            </p>
          </FadeDown>

          <FadeDown delay={0.4}>
            <hr className="w-full h-[3px] bg-primaryRed" />
          </FadeDown>

          <FadeDown delay={0.5}>
            <p className="lg:text-[18px] md:text-[14px] text-[11px] text-center font-normal py-4 text-muted-100">
              Log in with your Email and password
            </p>
          </FadeDown>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-3"
        >
          <FadeDown delay={0.6}>
            <TextInput
              {...register("email")}
              type="email"
              name="email"
              label="Email"
              id="email"
              withAsterisk
              size="md"
              placeholder="Enter your email"
              radius={8}
              error={
                errors.email?.message ? (
                  <InputErrors errorMessage={errors.email.message} />
                ) : null
              }
            />
          </FadeDown>

          <FadeDown delay={0.7}>
            <PasswordInput
              {...register("password")}
              label="Password"
              id="Password"
              withAsterisk
              radius={8}
              placeholder="Enter your password"
              size="md"
              error={
                errors.password?.message ? (
                  <InputErrors errorMessage={errors.password.message} />
                ) : null
              }
            />
          </FadeDown>

          <FadeDown delay={0.8}>
            <PrimaryButton type="submit" disabled={!isValid}>
              LOGIN
            </PrimaryButton>
          </FadeDown>
        </form>
      </div>
    </main>
  );
}
