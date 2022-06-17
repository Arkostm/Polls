import { useContext, createContext, useState, useEffect, useMemo } from 'react';

//Context
export const AppContext = createContext<any>(null);

//Provider
export const AppContextProvider = ({ children }: any) => {
  const [log, setLog] = useState<boolean>(false);

  useEffect(() => {}, []);

  const values = useMemo(
    () => ({
      log,
      setLog,
    }),
    [log]
  );
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    console.error('Error deploying App Context!!!');
  }

  return context;
}
