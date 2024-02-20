import Definition from "src/screens/Definition";
import Clasification from "src/screens/Clasification";
/* import InHome from "screens/burnPrevention/InHome";
import Labor from "screens/burnPrevention/Labor";
import whatToDo from "screens/WhatToDo";
import References from "screens/References";
import PagesOfInterest from "screens/PagesOfInterest";
import About from "screens/About"; */
import StackTypeOfBurns from "src/navigation/stack/StackTypeOfBurns";  
import { RouteDrawer, RouteDrwerScreen } from "src/types/routes";

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
    children: [
      {
        key: 7,
        title: 'Hogar',
        children: null,
        show: true
      },
      {
        key: 8,
        title: 'Laboral',
        children: null,
        show: true
      }
    ],
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
    component: Clasification,
    showHeader: true
  },
  {
    key: 7,
    title: 'Hogar',
    component: Clasification,
    showHeader: true
  },
  {
    key: 8,
    title: 'Laboral',
    component: Clasification,
    showHeader: true
  },
  {
    key: 9,
    title: '¿Qué hacer en caso de quemadura?',
    component: Clasification,
    showHeader: true
  },
  {
    key: 10,
    title: 'Referencias',
    component: Clasification,
    showHeader: true
  },
  {
    key: 11,
    title: 'Páginas de interés',
    component: Clasification,
    showHeader: true
  },
  {
    key: 12,
    title: 'Acerca de',
    component: Clasification,
    showHeader: true
  }
]