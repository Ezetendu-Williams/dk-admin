import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  duration?: number;
  delay?: number;
}

export default function FadeDown({
  children,
  delay = 0,
  duration = 0.5,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: "0", y: "-20px" }}
      animate={{ opacity: "1", y: "0px" }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}
