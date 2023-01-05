import { useRouter } from 'next/router';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import SlashIcon from '@public/icons/slash.svg';
import { headerNavList } from '@utils/constants';

import Burger from '../burger';
import Button from '../button';
import Input from '../input';

import styles from './styles.module.scss';

interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  searchFiler?: string;
  setSearchFilter?: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  searchFiler,
  setSearchFilter,
  ...props
}) => {
  const router = useRouter();

  return (
    <header className={styles.header} {...props}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <Button
            className={styles.headerLogoButton}
            onClick={() => router.replace('/')}
          >
            Regex.ua
          </Button>
        </div>
        <form className={styles.headerForm}>
          <Input
            className={styles.headerInput}
            placeholder="Search by name or tags"
            value={searchFiler}
            onChange={(e) => setSearchFilter?.(e.target.value)}
          />
          <SlashIcon />
        </form>
        <nav className={styles.headerNav}>
          {headerNavList.map(({ text }, i) => (
            <Button
              key={text + i}
              className={styles.headerNavItem}
              onClick={() =>
                router.replace({ query: { filter: text.toLowerCase() } })
              }
              whileHover={{ scale: 1.05 }}
            >
              {text}
            </Button>
          ))}
        </nav>
        <Burger className={styles.headerBurger} />
      </div>
    </header>
  );
};

export default Header;
