import { useContext } from 'react';
import { RouteContext } from 'src/context/RouteProvider';

export const useRouteContext = () => {
  const { currentRoute, setCurrentRoute } = useContext(RouteContext);

  return {
    currentRoute,
    setCurrentRoute
  }
}