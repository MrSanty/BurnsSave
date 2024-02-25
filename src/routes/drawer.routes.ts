import Definition from "src/screens/Definition";
import Clasification from "src/screens/Clasification/Clasification";
import StackTypeOfBurns from "src/navigation/stack/StackTypeOfBurns";  
import { RouteDrawer, RouteDrwerScreen } from "src/types/routes";
import Complications from "src/screens/Complications";
import StackBurnsPrevention from "src/navigation/stack/StackBurnsPrevention";
import StackBurnsManage from "src/navigation/stack/StackBurnsManage";
import References from "src/screens/References";
import InterestedPage from "src/screens/InterestedPage";
import AboutUs from "src/screens/AboutUs";

export const drawerRoutes: RouteDrawer[] = [
  {
    key: 1,
    title: 'Inicio',
    children: [
      {
        key: 2,
        title: 'Definición',
        children: null,
        show: true
      },
      {
        key: 3,
        title: 'Tipos de quemaduras',
        children: null,
        show: true
      },
      {
        key: 4,
        title: 'Clasificación',
        children: null,
        show: true
      },
      {
        key: 5,
        title: 'Complicaciones',
        children: null,
        show: true
      }
    ],
    show: true,
    
  },
  {
    key: 6,
    title: 'Prevención de la quemadura',
    children: null,
    show: true,
    
  },
  {
    key: 9,
    title: '¿Qué hacer en caso de quemadura?',
    children: null,
    show: true
  },
  {
    key: 10,
    title: 'Referencias',
    children: null,
    show: true
  },
  {
    key: 11,
    title: 'Páginas de interés',
    children: null,
    show: true
  },
  {
    key: 12,
    title: 'Acerca de',
    children: null,
    show: true
  }
]

export const drawerScreenRoutes: RouteDrwerScreen[] = [
  {
    key: 2,
    title: 'Definición',
    component: Definition,
    showHeader: true
  },
  {
    key: 3,
    title: 'Tipos de quemaduras',
    component: StackTypeOfBurns,
    showHeader: false
  },
  {
    key: 4,
    title: 'Clasificación',
    component: Clasification,
    showHeader: true
  },
  {
    key: 5,
    title: 'Complicaciones',
    component: Complications,
    showHeader: true
  },
  {
    key: 6,
    title: 'Prevención de la quemadura',
    component: StackBurnsPrevention,
    showHeader: false
  },
  {
    key: 9,
    title: '¿Qué hacer en caso de quemadura?',
    component: StackBurnsManage,
    showHeader: false
  },
  {
    key: 10,
    title: 'Referencias',
    component: References,
    showHeader: true
  },
  {
    key: 11,
    title: 'Páginas de interés',
    component: InterestedPage,
    showHeader: true
  },
  {
    key: 12,
    title: 'Acerca de',
    component: AboutUs,
    showHeader: true
  }
]