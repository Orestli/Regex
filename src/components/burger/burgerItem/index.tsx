import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import Button from '../../button';

import styles from './styles.module.scss';

const variants = {
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

interface BurgerItemProps {
  text: string;
  handleCloseBurger: () => void;
}

const BurgerItem: React.FC<BurgerItemProps> = ({ text, handleCloseBurger }) => {
  const router = useRouter();

  const onClick = () => {
    handleCloseBurger();
    router.replace({ query: { filter: text.toLowerCase() } });
  };

  return (
    <motion.li
      className={styles.burgerItem}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button onClick={onClick}>{text}</Button>
    </motion.li>
  );
};

export default BurgerItem;
