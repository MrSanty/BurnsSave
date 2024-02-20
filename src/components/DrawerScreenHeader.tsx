import { Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const DrawerScreenHeader = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={[ '#FB0860', '#FD7B26' ]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.alignSelfStart}
      >
        <Image
          source={require('src/assets/icons/back.png')}
          style={styles.imageIconBack}
        />
      </TouchableOpacity>

      <Image
        source={require('src/assets/logos/burns-logo.png')}
        style={styles.burnsLogo}
      />

      {/* Button to open or close the drawer image on the rigth */}
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        style={styles.alignSelfEnd}
      >
        <Image
          source={require('src/assets/icons/menu.png')}
          style={styles.imageIconMenu}
        />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  alignSelfStart: {
    alignSelf: 'flex-start'
  },
  imageIconBack: {
    height: 20,
    resizeMode: 'contain',
    width: 20
  },
  burnsLogo: {
    alignSelf: 'center',
    height: 90,
    resizeMode: 'contain',
    width: 90
  },
  alignSelfEnd: {
    alignSelf: 'flex-end'
  },
  imageIconMenu: {
    height: 20,
    resizeMode: 'contain',
    width: 20
  }
});

export default DrawerScreenHeader;
