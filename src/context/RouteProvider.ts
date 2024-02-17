import { createContext } from 'react';

export const RouteContext = createContext({
  currentRoute: 'Introduction',
  setCurrentRoute: (route: string) => {}
});
