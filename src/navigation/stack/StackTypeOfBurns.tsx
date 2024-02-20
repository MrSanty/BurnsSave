import { typesOfBurnsRoutes } from 'src/routes/typesOfBurns.routes';
import DrawerScreenHeader from 'src/components/DrawerScreenHeader';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const { Navigator, Screen } = createNativeStackNavigator();

const StackTypeOfBurns = () => {
  return (
    <Navigator
      screenOptions={{
        header: props => <DrawerScreenHeader />
      }}
      initialRouteName="Index"
    >
      {
        typesOfBurnsRoutes.map((route) => (
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
export default StackTypeOfBurns;
