import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import patterns from '@utils/patterns.json';

import Footer from '../components/footer';
import Header from '../components/header';
import Main from '../components/main';

import styles from './styles.module.scss';

export type PatternsType = typeof patterns;

const Layout: React.FC = () => {
  const router = useRouter();
  const [filter, setFilter] = useState<PatternsType>([]);
  const [searchFilter, setSearchFilter] = useState('');

  useEffect(() => {
    if (searchFilter) {
      const filtered = patterns.filter((pattern) =>
        `${pattern.tags} ${pattern.title}`.includes(searchFilter),
      );

      setFilter(filtered);
    } else {
      setFilter(patterns);
    }
  }, [searchFilter]);

  useEffect(() => {
    if (router.query.filter) {
      const filtered = patterns.filter((pattern) =>
        pattern.tags.includes((router.query.filter as string).toLowerCase()),
      );

      setFilter(filtered);
    } else {
      setFilter(patterns);
    }
  }, [router.query.filter]);

  const onChangeFilter = (value: string) => {
    setSearchFilter(value);
    router.replace({ query: { filter: value } });
  };

  return (
    <div className={styles.wrapper}>
      <Header searchFiler={searchFilter} setSearchFilter={onChangeFilter} />
      <Main patterns={filter} />
      <Footer />
    </div>
  );
};

export default Layout;
