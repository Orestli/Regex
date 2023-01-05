import type { PatternsType } from '../../layout';
import Card from '../card';

import styles from './styles.module.scss';

interface Props {
  patterns: PatternsType;
}

const Main: React.FC<Props> = ({ patterns }) => {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        {patterns.map((pattern) => (
          <Card
            key={pattern.pattern}
            pattern={pattern.pattern}
            description={pattern.description}
            placeholder={pattern.placeholder}
            labels={pattern.tags}
            title={pattern.title}
          />
        ))}
      </section>
    </main>
  );
};

export default Main;
