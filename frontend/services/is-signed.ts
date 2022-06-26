import { NextRouter } from 'next/router';

export const isSigned = async (setLog: Function, router: NextRouter) => {
  const response = await fetch('/api/user');
  if (response.ok) {
    setLog(true);
  } else {
    setLog(false);
    router.push('/');
  }
};
