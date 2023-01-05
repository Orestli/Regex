import { MotionProps } from 'framer-motion';
import { HTMLAttributes } from 'react';

export type MotionType<T> = HTMLAttributes<T> & MotionProps;
