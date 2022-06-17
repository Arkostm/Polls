import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useAppContext } from '../components/Context';

const Logout: NextPage = () => {
  const { setLog } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const response = await fetch('/api/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        setLog(false);
        router.push('/');
      }
    })();
  }, [router, setLog]);

  return <></>;
};

export default Logout;
