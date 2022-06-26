import Image from 'next/image';
import { useState } from 'react';

import styles from '../styles/Home.module.css';

export const Footer = () => {
  const [href] = useState<string>('https://es.wikipedia.org/wiki/Mr._Robot');
  return (
    <footer className={styles.footer}>
      <a href={href} target='_blank' rel='noopener noreferrer'>
        <div>Powered by</div>
        <div>
          <span className={styles.logo}>
            <Image src='/mrrobot.png' alt='mr robot' width={72} height={52} />
          </span>
        </div>
      </a>
    </footer>
  );
};
