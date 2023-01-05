import { format } from 'date-fns';
import Link from 'next/link';

import { footerNavList } from '@utils/constants';

import styles from './styles.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <span className={styles.footerText}>
          © {format(new Date(), 'yyyy')} Regex.ua
        </span>
        <nav className={styles.footerNav}>
          {footerNavList.map(({ text, link }) => (
            <Link key={text} href={link}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerNavItem}
              >
                {text}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
