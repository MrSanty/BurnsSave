import Definition from "src/screens/Definition";
import Clasification from "src/screens/Clasification";
/* import InHome from "screens/burnPrevention/InHome";
import Labor from "screens/burnPrevention/Labor";
import whatToDo from "screens/WhatToDo";
import References from "screens/References";
import PagesOfInterest from "screens/PagesOfInterest";
import About from "screens/About"; */
import StackTypeOfBurns from "src/navigation/stack/StackTypeOfBurns";  
import { RouteDrawer } from "src/types/routes";

export const drawerRoutes: RouteDrawer[] = [
  {
    key: 'Home',
    title: 'Inicio',
    component: null,
    parent: null,
    isParent: true,
    showHeader: true
  },
  {
    key: 'Definition',
    title: 'Definición',
    component: Definition,
    parent: 'Inicio',
    isParent: false,
    showHeader: true
  },
  {
    key: 'TypeOfBurns',
    title: 'Tipos de quemaduras',
    component: StackTypeOfBurns,
    parent: 'Inicio',
    isParent: false,
    showHeader: false
  },
  {
    key: 'Clasification',
    title: 'Clasificación',
    component: Clasification,
    parent: 'Inicio',
    isParent: false,
    showHeader: true
  },
  {
    key: 'Complications',
    title: 'Complicaciones',
    component: null,
    parent: 'Inicio',
    isParent: false,
    showHeader: true
  },
  {
    key: 'Prevention',
    title: 'Prevención de la quemadura',
    component: null,
    parent: null,
    isParent: true,
    showHeader: true
  },
  {
    key: 'InHome',
    title: 'Hogar',
    component: null,
    parent: 'Prevención de la quemadura',
    isParent: false,
    showHeader: true
  },
  {
    key: 'Labor',
    title: 'Laboral',
    component: null,
    parent: 'Prevención de la quemadura',
    isParent: false,
    showHeader: true
  },
  {
    key: 'WhatToDo',
    title: '¿Qué hacer en caso de quemadura?',
    component: null,
    parent: null,
    isParent: false,
    showHeader: true
  },
  {
    key: 'References',
    title: 'Referencias',
    component: null,
    parent: null,
    isParent: false,
    showHeader: true
  },
  {
    key: 'PagesOfInterest',
    title: 'Páginas de interés',
    component: null,
    parent: null,
    isParent: false,
    showHeader: true
  },
  {
    key: 'About',
    title: 'Acerca de',
    component: null,
    parent: null,
    isParent: false,
    showHeader: true
  }
]