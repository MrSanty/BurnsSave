import global from 'src/styles/global';
import { useEffect, useState } from 'react';
import { useRouteContext } from 'src/hooks/useRouteContext';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import ParentDrawerButton from 'src/components/ParentDrawerButton';
import ChildrenDrawerButton from 'src/components/ChildrenDrawerButton';
import { RouteDrawer } from 'src/types/routes';
import { drawerRoutes } from 'src/routes/drawer.routes';

const CustomMenu = () => {
  const navigation = useNavigation<any>();
  const { currentRoute, setCurrentRoute } = useRouteContext();
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
    if (route.children) {
      let activeRoute = null;
      const updatedRoutes = listRoutes.map(item => {
        if (item.title !== route.title) {
          item.show = false;
        }

        if (item.title === route.title) {
          activeRoute = item;
        }

        return item;
      })

      setActiveParent(activeRoute);
      setListRoutes(updatedRoutes);
    } else {
      navigation.navigate({
        name: route.title,
        params: { previousRoute: currentRoute },
      })
      setCurrentRoute(route.key as number);
    }
  }

  const returnToPreviousItem = (route: RouteDrawer) => {
    const updatedRoutes = listRoutes.map(item => {
      item.show = true;
      return item;
    })

    setActiveParent(null);
    setListRoutes(updatedRoutes);
  }

  return (
    <LinearGradient
      colors={[ '#FB0362', '#FFC203' ]}
      start={{ x: 0, y: 0.1 }}
      end={{ x: 1, y: 0.9 }}
      style={global.flex}
    >
      <ScrollView>
        <SafeAreaView>
          <View style={styles.logoContainer}>
            <Image source={require('src/assets/logos/logo.png')} style={styles.logo} />
          </View>

          <View style={styles.containerDrawer}>
            <View style={styles.widthFull}>
              {
                listRoutes.map(route => {
                  if (route.show) {
                    return (
                      <ParentDrawerButton
                        returnToPreviousItem={returnToPreviousItem}
                        updateItems={onRoutePress}
                        route={route}
                        isActive={route.key === activeParent?.key}
                        key={route.key}
                      />
                    )
                  }
                })
              }
            </View>


            <View style={styles.containerButtons}>
              {
                activeParent?.children?.map(route => {
                  return (
                    <ChildrenDrawerButton
                      route={route}
                      onItemPress={onRoutePress}
                      childrens={activeParent.children as RouteDrawer[]}
                      isActive={route.key === currentRoute}
                      key={route.key}
                    />
                  )
                })
              }
            </View>
          </View>


          <View style={styles.logoUamContainer}>
            <Image source={require('src/assets/logos/uam.png')} style={styles.uamImage} />
          </View>
        </SafeAreaView>
      </ScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    height: 'auto'
  },
  logo: {
    height: 180,
    paddingVertical: 30,
    resizeMode: 'contain',
    width: 180
  },
  containerDrawer: {
    alignItems: 'flex-start',
    display: 'flex',
    height: 240,
    width: '100%'
  },
  logoUamContainer: {
    alignItems: 'center',
    height: 'auto'
  },
  uamImage: {
    height: 250,
    resizeMode: 'contain',
    width: 250
  },
  widthFull: {
    width: '100%'
  },
  containerButtons: {
    backgroundColor: '#FAF8F9',
    marginHorizontal: 20,
    width: '86%'
  }
})

export default CustomMenu;
