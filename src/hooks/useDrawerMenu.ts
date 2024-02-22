import { useEffect, useState } from 'react';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { drawerRoutes } from 'src/routes/drawer.routes';
import { RouteDrawer } from 'src/types/routes';

export const useDrawerMenu = () => {
  const navigation = useNavigation<any>();
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

    setActiveParent(activeRoute);
    setListRoutes(listOfRoutes);
  }, [])

  const onRoutePress = (route: RouteDrawer) => {
    if (route.children) {
      expandSection(route);
    } else {
      navigation.navigate({
        name: route.title
      })
    }
  }

  const closeDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  }

  const expandSection = (route: RouteDrawer) => {
    let activeRoute = null;
    const updatedRoutes = listRoutes.map((item) => {
      if (item.key === route.key) {
        item.show = true;
        activeRoute = item;
      } else {
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
