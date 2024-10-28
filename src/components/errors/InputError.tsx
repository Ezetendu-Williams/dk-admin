import { ReactNode } from "react";

export default function InputErrors({
  errorMessage,
}: {
  errorMessage: ReactNode;
}) {
  return (
    <div className="text-[11px] text-red-600 font-medium">{errorMessage}</div>
  );
}
