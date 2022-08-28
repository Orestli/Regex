import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";

import { MotionType } from "@typings/index";

import styles from "./styles.module.scss";

type ButtonType = "default" | "github";

interface ButtonProps extends MotionType<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  appearance?: ButtonType;
}

const Button: React.FC<ButtonProps> = ({
  className,
  appearance = "default",
  children,
  ...props
}) => {
  return (
    <motion.button
      type="button"
      className={clsx(styles.customButton, styles[appearance], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
