import { motion } from 'framer-motion';

import { headerNavList } from '@utils/constants';

import BurgerItem from '../burgerItem';

import styles from './styles.module.scss';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const titleVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface NavigationProps {
  handleCloseBurger: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ handleCloseBurger }) => (
  <motion.ul className={styles.list} variants={variants}>
    <motion.h3 className={styles.listTitle} variants={titleVariants}>
      Sections
    </motion.h3>
    {headerNavList.map(({ text }) => (
      <BurgerItem
        key={text}
        text={text}
        handleCloseBurger={handleCloseBurger}
      />
    ))}
  </motion.ul>
);

export default Navigation;
