import { PUBLIC_ROUTES } from './routes';

const PATHS: Array<string> = PUBLIC_ROUTES.map(({ path }) => path);

export const availablePathWithoutLogin = (path: string): boolean => {
  return PATHS.includes(path);
};
