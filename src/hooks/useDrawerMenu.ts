import { useEffect, useState } from 'react';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { BackHandler } from 'react-native';
import { useRouteContext } from 'src/hooks/useRouteContext';
import { drawerRoutes } from 'src/routes/drawer.routes';
import { RouteDrawer } from 'src/types/routes';

export const useDrawerMenu = () => {
  const navigation = useNavigation<any>();
  const { setCurrentRoute } = useRouteContext();
  const [ listRoutes, setListRoutes ] = useState<RouteDrawer[]>([]);
  const [ activeParent, setActiveParent ] = useState<RouteDrawer | null>(null);

  useEffect(() => {
    let activeRoute = null;

    const listOfRoutes = drawerRoutes.map(route => {
      if (route.title === 'Inicio') {
        activeRoute = route;
        route.show = true;
      } else {
        route.show = false;
      }

      return route;
    })

    setCurrentRoute(2);
    setActiveParent(activeRoute);
    setListRoutes(listOfRoutes);
  }, [])

  const onRoutePress = (route: RouteDrawer) => {
    if (route.key == 13) {
      BackHandler.exitApp();
      return;
    }


    if (route.children) {
      expandSection(route);
    } else {
      navigation.navigate({
        name: route.title
      })
      setCurrentRoute(route.key as number);
    }
  }

  const closeDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  }

  const expandSection = (route: RouteDrawer) => {
    let activeRoute = null;
    const index = listRoutes.findIndex(item => item.title === route.title);
    const updatedRoutes = listRoutes.map((item, i) => {
      if (i === index) {
        item.show = true;
        activeRoute = item;
      } 

      if (i > index) {
        item.show = false;
      }

      return item;
    })

    setActiveParent(activeRoute);
    setListRoutes(updatedRoutes);
  }

  const collapseSection = (route: RouteDrawer) => {
    const updatedRoutes = listRoutes.map(item => {
      item.show = true;
      return item;
    })

    setActiveParent(null);
    setListRoutes(updatedRoutes);
  }

  return {
    listRoutes,
    activeParent,
    onRoutePress,
    collapseSection,
    closeDrawer
  }
}
