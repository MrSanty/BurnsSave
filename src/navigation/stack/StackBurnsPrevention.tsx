import DrawerScreenHeader from 'src/components/DrawerScreenHeader';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { burnsPreventionRoutes } from 'src/routes/burnsPrevention.routes';


const { Navigator, Screen } = createNativeStackNavigator();

const StackBurnsPrevention = () => {
  return (
    <Navigator
      screenOptions={{
        header: props => <DrawerScreenHeader />
      }}
      initialRouteName="Index"
    >
      {
        burnsPreventionRoutes.map((route) => (
          <Screen
            key={route.key}
            name={route.title}
            component={route.component}
          />
        ))
      }
    </Navigator>
  );
};
export default StackBurnsPrevention;
