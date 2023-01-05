import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Button from '../../components/button';
import Header from '../../components/header';

import styles from './styles.module.scss';

const PageNotFound: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'visible';
      document.documentElement.style.overflow = 'visible';
    };
  }, []);

  return (
    <>
      <Head>
        <title>404 | RegEx</title>
      </Head>
      <Header onClick={() => router.push('/')} />
      <div className={styles.wrapper}>
        <motion.div
          className={styles.box}
          animate={{
            width: ['0px', '500px', '350px', '3000px'],
            height: ['0px', '500px', '350px', '3000px'],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: 0,
            repeatDelay: 1,
          }}
        />
        <motion.div
          className={styles.container}
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 1.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <motion.h1 className={styles.title}>404</motion.h1>
          <motion.p>This page does not exist. We're sorry.</motion.p>
          <Button
            className={styles.button}
            appearance="github"
            onClick={() => router.push('/')}
            data-testid="back-home-button"
          >
            Go to main page
          </Button>
        </motion.div>
      </div>
    </>
  );
};

export default PageNotFound;
