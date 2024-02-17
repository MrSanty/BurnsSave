import { Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const DrawerScreenHeader = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={['#FB0860', '#FD7B26']}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        paddingHorizontal: 20,
      }}
    >
      {/* Back button with image and without text, on left */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          alignSelf: 'flex-start',
        }}
      >
        <Image
          source={require('src/assets/icons/back.png')}
          style={{
            width: 20,
            height: 20,
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>

      <Image
        source={require('src/assets/logos/burns-logo.png')}
        style={{
          width: 90,
          height: 90,
          resizeMode: 'contain',
          alignSelf: 'center',
        }}
      />

      {/* Button to open or close the drawer image on the rigth */}
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        style={{
          alignSelf: 'flex-end',
        }}
      >
        <Image
          source={require('src/assets/icons/menu.png')}
          style={{
            width: 25,
            height: 25,
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
    </LinearGradient>
  );
};
export default DrawerScreenHeader;
