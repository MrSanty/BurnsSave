import BurnPrevention from "src/screens/BurnsPrevention/BurnPrevention";
import Labor from "src/screens/BurnsPrevention/Labor";
import Home from "src/screens/BurnsPrevention/Home";


export const burnsPreventionRoutes = [
  {
    key: 'Index',
    title: 'Index',
    component: BurnPrevention
  },
  {
    key: 'Labor',
    title: 'Laboral',
    component: Labor
  },
  {
    key: 'Home',
    title: 'Hogar',
    component: Home
  }
]