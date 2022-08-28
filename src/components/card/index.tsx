import clsx from "clsx";
import { motion } from "framer-motion";
import React, { useState } from "react";

import TooltipIcon from "@public/icons/tooltip.svg";
import { checkRegex } from "@utils/index";

import CustomTooltip from "../customTooltip";
import Input from "../input";
import Label from "../label";

import styles from "./styles.module.scss";

interface CardProps {
  description: string;
  pattern: string;
  title: string;
  placeholder: string;
  labels: string;
}

const Card: React.FC<CardProps> = ({ description, pattern, title, placeholder, labels }) => {
  const [inputValue, setInputValue] = useState("");

  const matches = checkRegex(inputValue, pattern);
  const isCorrect = matches.length > 0;

  return (
    <motion.div
      className={styles.cardContainer}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.cardHeader}>
        {title.length > 25 ? title.substr(0, 30) + "..." : title}
        <CustomTooltip
          style={{ display: "flex" }}
          title={description}
          animation="shift"
          theme="dark"
          arrow
        >
          <TooltipIcon />
        </CustomTooltip>
      </div>
      <div className={styles.cardBody}>
        <Input className={styles.cardInput} value={pattern} appearance="text" iconCopy readOnly />
        <Input
          className={clsx(
            styles.cardInput,
            inputValue && (isCorrect ? styles.patterSuccess : styles.patterError)
          )}
          appearance="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className={styles.cardFooter}>
        {labels.split(",").map((label, i) => (
          <Label key={label + i} text={label} />
        ))}
      </div>
    </motion.div>
  );
};

export default Card;
