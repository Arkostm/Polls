import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useAppContext } from '../components/Context';

const Logout: NextPage = () => {
  const { setLog } = useAppContext();
  const router = useRouter();
  useEffect(() => {
    setLog(false);
    router.push('/');
  }, []);

  return <></>;
};

export default Logout;
