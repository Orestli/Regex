import clsx from "clsx";
import { useRouter } from "next/router";
import React from "react";

import { MotionType } from "@typings/index";

import Button from "../button";

import styles from "./styles.module.scss";

interface LabelProps extends MotionType<HTMLButtonElement> {
  className?: string;
  text: string;
}

const Label: React.FC<LabelProps> = ({ text, className, ...props }) => {
  const router = useRouter();

  return (
    <Button
      className={clsx(styles.label, className)}
      onClick={() => router.replace({ query: { filter: text } })}
      {...props}
    >
      {text}
    </Button>
  );
};

export default Label;
