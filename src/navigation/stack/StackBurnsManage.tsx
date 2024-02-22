import DrawerScreenHeader from 'src/components/DrawerScreenHeader';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { burnsManageRoutes } from 'src/routes/burnsManage.routes';


const { Navigator, Screen } = createNativeStackNavigator();

const StackBurnsManage = () => {
  return (
    <Navigator
      screenOptions={{
        header: props => <DrawerScreenHeader />
      }}
      initialRouteName="Index"
    >
      {
        burnsManageRoutes.map((route) => (
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
export default StackBurnsManage;
