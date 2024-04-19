import { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import Introduction from 'src/screens/Introduction';
import DrawerMenu from 'src/navigation/drawer/DrawerMenu';
import { RouteContext } from 'src/context/RouteProvider';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TrackPlayer from 'react-native-track-player';
import Consent from './screens/Consent';

const { Navigator, Screen } = createNativeStackNavigator();

const App = () => {
  const [currentRoute, setCurrentRoute] = useState<number>(1);

  useEffect(() => {
    setTimeout(() => {
      TrackPlayer.registerPlaybackService(() => require('./utils/TrackerSevice'));
      TrackPlayer.setupPlayer();
      SplashScreen.hide();
    }, 500);
  }, []);

  return (
    <RouteContext.Provider value={{ currentRoute, setCurrentRoute }}>
      <NavigationContainer>
        <Navigator
          initialRouteName="Consent"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Screen name="Consent" component={Consent} />
          <Screen name="Introduction" component={Introduction} />
          <Screen name="Main" component={DrawerMenu} />
        </Navigator>
      </NavigationContainer>
    </RouteContext.Provider>
  );
};

export default App;