import clsx from 'clsx';
import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import CopyIcon from '@public/icons/copy.svg';

import Button from '../button';

import styles from './styles.module.scss';

type InputType = 'default' | 'text';

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  appearance?: InputType;
  className?: string;
  'button-data-testid'?: string;
  'data-testid'?: string;
  placeholder?: string;
  iconCopy?: boolean;
  value?: string;
}

const Input: React.FC<InputProps> = ({
  'data-testid': dataTestId,
  'button-data-testid': buttonDataTestId,
  appearance = 'default',
  placeholder,
  className,
  iconCopy,
  value,
  ...props
}) => {
  const copyValueToClipboard = () =>
    value && navigator.clipboard.writeText(value);

  return iconCopy ? (
    <div className={clsx(styles.inputCopyContainer, className)}>
      <input
        className={clsx(
          styles.customInput,
          styles.inputCopy,
          styles[appearance],
        )}
        placeholder={placeholder}
        value={value}
        {...props}
        data-testid={dataTestId || 'input'}
      />
      <Button
        className={styles.copyBlock}
        onClick={copyValueToClipboard}
        data-testid={buttonDataTestId || 'input-button'}
      >
        <CopyIcon />
      </Button>
    </div>
  ) : (
    <input
      className={clsx(styles.customInput, styles[appearance], className)}
      placeholder={placeholder}
      {...props}
      data-testid={dataTestId || 'input'}
    />
  );
};

export default Input;
