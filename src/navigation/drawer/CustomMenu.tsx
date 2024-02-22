import LinearGradient from 'react-native-linear-gradient';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';
import ParentDrawerButton from 'src/components/ParentDrawerButton';
import ChildrenDrawerButton from 'src/components/ChildrenDrawerButton';
import { RouteDrawer } from 'src/types/routes';
import { useDrawerMenu } from 'src/hooks/useDrawerMenu';
import { useRouteContext } from 'src/hooks/useRouteContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomMenu = () => {
  const { currentRoute } = useRouteContext();
  const {
    listRoutes,
    activeParent,
    onRoutePress,
    collapseSection,
    closeDrawer
  } = useDrawerMenu();

  return (
    <LinearGradient
      colors={[ '#FB0362', '#FFC203' ]}
      start={{ x: 0, y: 0.1 }}
      end={{ x: 1, y: 0.9 }}
      style={styles.flex}
    >
      <SafeAreaView>
        <View style={styles.logoContainer}>
          <View
            style={styles.closeButton}
          >
            <TouchableOpacity
              onPress={closeDrawer}
            >
              <Image source={require('src/assets/icons/close.png')} style={styles.closeIcon} />
            </TouchableOpacity>
          </View>
          <Image source={require('src/assets/logos/logo.png')} style={styles.logo} />
        </View>

        <View style={styles.containerDrawer}>
          <View style={styles.widthFull}>
            {
              listRoutes.map(route => {
                if (route.show) {
                  return (
                    <ParentDrawerButton
                      key={route.key}
                      returnToPreviousItem={collapseSection}
                      updateItems={onRoutePress}
                      route={route}
                      isActive={route.key === activeParent?.key || route.key === currentRoute}
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
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  logoContainer: {
    alignItems: 'center',
    height: 'auto'
  },
  logo: {
    height: 200,
    paddingVertical: 30,
    resizeMode: 'contain',
    width: 180
  },
  containerDrawer: {
    alignItems: 'flex-start',
    height: 230,
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
  },
  closeButton: {
    height: 'auto',
    position: 'absolute',
    right: 10,
    top: 15,
  },
  closeIcon: {
    height: 15,
    resizeMode: 'contain',
    width: 15
  }
})

export default CustomMenu;
