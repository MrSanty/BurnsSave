import { useEffect } from "react";
import { useRouteContext } from "./useRouteContext";


export const useNavigationChange = (navigation: any, route: number) => {
  const { setCurrentRoute } = useRouteContext();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setCurrentRoute(route);
    });

    return unsubscribe;
  }, [ navigation ])

  return;
}