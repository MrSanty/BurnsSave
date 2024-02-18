import global from 'src/styles/global';
import { RouteDrawer } from 'src/types/routes';
import { useEffect, useState } from 'react';
import DrawerChildButton from 'src/components/DrawerButton';
import { drawerRoutes } from 'src/routes/drawer.routes';
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
import DrawerParentButton from 'src/components/DrawerParentButton';

const DrawerContent = () => {
  const navigation = useNavigation<any>();
  const { currentRoute, setCurrentRoute } = useRouteContext();
  const [ activeItems, setActiveItems ] = useState<RouteDrawer[]>([]);

  useEffect(() => {
    const listOfRoutes = drawerRoutes.filter(element => {
      return element.parent === 'Inicio';
    });

    setCurrentRoute(2);

    setActiveItems(listOfRoutes);
  }, []);

  const onItemPress = (item: RouteDrawer) => {
    if (updateItems(item)) {
      navigation.navigate({
        name: item.title,
        params: { previousRoute: currentRoute },
      });
      setCurrentRoute(item.key as number);
    }
  };

  const updateItems = (item: RouteDrawer) => {
    const filteredItems = drawerRoutes.filter(element => {
      return element.parent === item.title;
    });

    if (filteredItems.length !== 0) {
      setActiveItems(filteredItems);
      return false;
    }
    return true;
  };

  const returnToPreviousItem = (item: RouteDrawer) => {
    const resetItems = drawerRoutes.filter(e => {
      return e.parent === null;
    });

    setActiveItems(resetItems);
  };

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
            {
              activeItems[ 0 ]?.parent !== null
              && (
                <DrawerParentButton
                  returnToPreviousItem={returnToPreviousItem}
                  updateItems={updateItems}
                  item={activeItems[ 0 ]}
                  isActive={true}
                />
              )
            }

            <View style={styles.widthFull}>
              {
                activeItems?.map(parent =>
                  parent.isParent && activeItems[ 0 ]?.parent === null
                    ? (
                      <DrawerParentButton
                        key={parent.key}
                        returnToPreviousItem={returnToPreviousItem}
                        updateItems={updateItems}
                        item={parent}
                        isActive={false}
                      />
                    )
                    : null
                )
              }
            </View>


            {
              activeItems[ 0 ]?.parent
                ? (
                  <View style={styles.containerButtons}>
                    {
                      activeItems?.map(child => (
                        <DrawerChildButton
                          item={child}
                          key={child.key}
                          onItemPress={onItemPress}
                          activeItems={activeItems}
                          isChildren
                          isActive={currentRoute === child.key}
                        />
                      ))
                    }
                  </View>
                )
                : (
                  <View style={styles.widthFull}>
                    {
                      activeItems?.map(route =>
                        activeItems[ 0 ]?.parent === null
                        && (
                          <>
                            {
                              !route.isParent
                              && (
                                <DrawerChildButton
                                  key={route.key}
                                  item={route}
                                  onItemPress={onItemPress}
                                  activeItems={activeItems}
                                />
                              )
                            }
                          </>
                        )
                      )
                    }
                  </View>
                )
            }
          </View>

          <View style={styles.logoUamContainer}>
            <Image source={require('src/assets/logos/uam.png')} style={styles.uamImage} />
          </View>
        </SafeAreaView>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    height: 'auto',
    alignItems: 'center'
  },
  logo: {
    width: 180,
    height: 180,
    paddingVertical: 30,
    resizeMode: 'contain'
  },
  containerDrawer: {
    width: '100%',
    height: 240,
    alignItems: 'flex-start',
    display: 'flex'
  },
  logoUamContainer: {
    height: 'auto',
    alignItems: 'center'
  },
  uamImage: {
    width: 250,
    height: 250,
    resizeMode: 'contain'
  },
  widthFull: {
    width: '100%'
  },
  containerButtons: {
    marginHorizontal: 20,
    width: '86%',
    backgroundColor: '#FAF8F9'
  }

});

export default DrawerContent;
