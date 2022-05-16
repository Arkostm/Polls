import type { NextPage } from 'next';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{' '}
          <a
            href='https://github.com/Arkostm/Polls'
            target='_blank'
            rel='noopener noreferrer'
          >
            Henry&apos;s Polls!
          </a>
        </h1>
      </main>
    </div>
  );
};

export default Home;
