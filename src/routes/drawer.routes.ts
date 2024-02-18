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
    key: 1,
    title: 'Inicio',
    component: null,
    parent: null,
    isParent: true,
    showHeader: true
  },
  {
    key: 2,
    title: 'Definición',
    component: Definition,
    parent: 'Inicio',
    isParent: false,
    showHeader: true
  },
  {
    key: 3,
    title: 'Tipos de quemaduras',
    component: StackTypeOfBurns,
    parent: 'Inicio',
    isParent: false,
    showHeader: false
  },
  {
    key: 4,
    title: 'Clasificación',
    component: Clasification,
    parent: 'Inicio',
    isParent: false,
    showHeader: true
  },
  {
    key: 5,
    title: 'Complicaciones',
    component: null,
    parent: 'Inicio',
    isParent: false,
    showHeader: true
  },
  {
    key: 6,
    title: 'Prevención de la quemadura',
    component: null,
    parent: null,
    isParent: true,
    showHeader: true
  },
  {
    key: 7,
    title: 'Hogar',
    component: null,
    parent: 'Prevención de la quemadura',
    isParent: false,
    showHeader: true
  },
  {
    key: 8,
    title: 'Laboral',
    component: null,
    parent: 'Prevención de la quemadura',
    isParent: false,
    showHeader: true
  },
  {
    key: 9,
    title: '¿Qué hacer en caso de quemadura?',
    component: null,
    parent: null,
    isParent: false,
    showHeader: true
  },
  {
    key: 10,
    title: 'Referencias',
    component: null,
    parent: null,
    isParent: false,
    showHeader: true
  },
  {
    key: 11,
    title: 'Páginas de interés',
    component: null,
    parent: null,
    isParent: false,
    showHeader: true
  },
  {
    key: 12,
    title: 'Acerca de',
    component: null,
    parent: null,
    isParent: false,
    showHeader: true
  }
]