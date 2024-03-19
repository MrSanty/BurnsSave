import { useEffect } from "react";
import { useRouteContext } from "./useRouteContext";
import TrackPlayer from "react-native-track-player";


export const useNavigationChange = (navigation: any, route: number) => {
  const { setCurrentRoute } = useRouteContext();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setCurrentRoute(route);
    });

    TrackPlayer.reset();

    return unsubscribe;
  }, [ navigation ])

  return;
}