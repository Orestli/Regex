import { format } from "date-fns";
import Link from "next/link";
import React from "react";

import { footerNavList } from "@utils/constants";

import styles from "./styles.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <span className={styles.footerText}>© {format(new Date(), "yyyy")} Regex.ua</span>
        <nav className={styles.footerNav}>
          {footerNavList.map(({ text, link }) => (
            <Link href={link} key={text}>
              <a className={styles.footerNavItem}>{text}</a>
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
