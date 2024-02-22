import BurnPrevention from "src/screens/BurnsPrevention/BurnPrevention";
import Labor from "src/screens/BurnsPrevention/Labor";
import Home from "src/screens/BurnsPrevention/Home";
import BurnManage from "src/screens/BurnsManage/BurnManage";
import GeneralPerformances from "src/screens/BurnsManage/GeneralPerformances";
import ConductGuidelines from "src/screens/BurnsManage/ConductGuidelines";
import ProhibitedActions from "src/screens/BurnsManage/ProhibitedActions";


export const burnsManageRoutes = [
  {
    key: 'Index',
    title: 'Index',
    component: BurnManage
  },
  {
    key: 'General',
    title: 'General',
    component: GeneralPerformances
  },
  {
    key: 'Conduct',
    title: 'Conduct',
    component: ConductGuidelines
  },
  {
    key: 'Prohibited',
    title: 'Prohibited',
    component: ProhibitedActions
  }
]