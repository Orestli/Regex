import { motion, useCycle } from 'framer-motion';
import { useEffect } from 'react';

import type { MotionType } from '@typings/index';

import MenuToggle from './menuToggle';
import Navigation from './navigation';
import styles from './styles.module.scss';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100px 30px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(25px at 40px 30px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const Burger: React.FC<MotionType<HTMLDivElement>> = ({ ...props }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'visible';
  }, [isOpen]);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={32}
      {...props}
    >
      <motion.div className={styles.background} variants={sidebar} />
      <Navigation handleCloseBurger={() => toggleOpen()} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.div>
  );
};

export default Burger;
