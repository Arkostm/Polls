export interface Route {
  path: string;
  name: string;
}

export const PUBLIC_ROUTES: Array<Route> = [
  {
    path: '/',
    name: 'Home',
  },
  { path: '/login', name: 'Login' },
];

export const PRIVATE_ROUTES: Array<Route> = [
  { path: '/dashboard', name: 'Dashboard' },
  { path: '/users', name: 'Users' },
  { path: '/logout', name: 'Logout' },
];
