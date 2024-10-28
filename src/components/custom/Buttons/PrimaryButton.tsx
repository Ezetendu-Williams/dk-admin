import { Button } from "@mantine/core";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function PrimaryButton({ children, ...props }: Props) {
  return (
    <Button
      {...props}
      radius={8}
      fullWidth
      className="click_btn"
      color="#e80e0f"
    >
      {children}
    </Button>
  );
}
