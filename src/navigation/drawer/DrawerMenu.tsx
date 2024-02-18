import { drawerRoutes } from 'src/routes/drawer.routes';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import DrawerScreenHeader from 'src/components/DrawerScreenHeader';
const { Navigator, Screen } = createDrawerNavigator();

const DrawerMenu = () => {
  return (
    <Navigator
      drawerContent={props => <DrawerContent />}
      screenOptions={{
        header: props => <DrawerScreenHeader />,
        drawerStyle: {
          backgroundColor: '#ebebeb',
          height: '72%',
          width: '80%',
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.23,
          shadowRadius: 11.27,
          elevation: 14,
        },
        overlayColor: 'rgba(0,0,0,0.2)',
        drawerActiveBackgroundColor: 'blue',
        drawerActiveTintColor: 'white',
      }}
    >
      {drawerRoutes.map(item =>
        item.component ? (
          <Screen
            options={{
              headerShown: item.showHeader
            }}
            key={item.key}
            name={item.title}
            component={item.component}
          />
        ) : null
      )}
    </Navigator>
  );
};

export default DrawerMenu;
