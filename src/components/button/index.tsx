import clsx from 'clsx';
import { motion } from 'framer-motion';

import type { MotionType } from '@typings/index';

import styles from './styles.module.scss';

type ButtonType = 'default' | 'github';

interface ButtonProps extends MotionType<HTMLButtonElement> {
  appearance?: ButtonType;
  className?: string;
  children: React.ReactNode;
  'data-testid'?: string;
}

const Button: React.FC<ButtonProps> = ({
  className,
  appearance = 'default',
  children,
  'data-testid': dataTestId,
  ...props
}) => {
  return (
    <motion.button
      type="button"
      className={clsx(styles.customButton, styles[appearance], className)}
      {...props}
      data-testid={dataTestId || 'button'}
    >
      {children}
    </motion.button>
  );
};

export default Button;
