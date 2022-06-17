import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppContext } from '../components/Context';
import { isSigned } from '../services/is-signed';

import { BarChart } from '../components/BarChart';
import { PieChart } from '../components/PieChart';

import styles from '../styles/Dashboard.module.css';

const Dashboard: NextPage = () => {
  const { setLog } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    isSigned(setLog, router);
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h3 className={styles.title}>Dashboard</h3>
        <div className={styles.charts}>
          <div className={styles.chart}>
            <BarChart></BarChart>
          </div>
          <div className={styles.chart}>
            <PieChart></PieChart>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
