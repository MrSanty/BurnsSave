import { createContext } from 'react';

export const RouteContext = createContext({
  currentRoute: 1,
  setCurrentRoute: (key: number) => {}
})
