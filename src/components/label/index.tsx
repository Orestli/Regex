import clsx from 'clsx';
import { useRouter } from 'next/router';

import type { MotionType } from '@typings/index';

import Button from '../button';

import styles from './styles.module.scss';

interface LabelProps extends MotionType<HTMLButtonElement> {
  className?: string;
  'data-testid'?: string;
  text: string;
}

const Label: React.FC<LabelProps> = ({
  'data-testid': dataTestId,
  text,
  className,
  ...props
}) => {
  const router = useRouter();

  return (
    <Button
      className={clsx(styles.label, className)}
      onClick={() => router.replace({ query: { filter: text } })}
      {...props}
      data-testid={dataTestId || 'tag'}
    >
      {text}
    </Button>
  );
};

export default Label;
