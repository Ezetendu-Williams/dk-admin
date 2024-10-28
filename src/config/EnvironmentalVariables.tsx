import * as Yup from "yup";

const envSchema = Yup.object().shape({
  VITE_APP_BASE_URL: Yup.string()
    .url("Invalid URL for REACT_APP_API_URL")
    .required("REACT_APP_API_URL is required"),
});

const env = () => {
  try {
    const validatedEnv = envSchema.validateSync(import.meta.env, {
      abortEarly: false,
    });
    return validatedEnv;
  } catch (error) {
    console.error("Environment validation error:", error);
    throw new Error("Environment variables validation failed");
  }
};

export default env;
