import TypeOfBurns from "src/screens/TypeOfBurns/TypeOfBurns";
import LiquidBurn from "src/screens/TypeOfBurns/LiquidBurn";
import FireBurn from "src/screens/TypeOfBurns/FireBurn";
import ChemicalBurn from "src/screens/TypeOfBurns/ChemicalBurn";
import ElectricalBurn from "src/screens/TypeOfBurns/ElectricalBurn";
import FrozenBurn from "src/screens/TypeOfBurns/FrozenBurn";


export const typesOfBurnsRoutes = [
  {
    key: 'Index',
    title: 'Index',
    component: TypeOfBurns
  },
  {
    key: 'Liquid',
    title: 'Líquido caliente o escaldaduras',
    component: LiquidBurn
  },
  {
    key: 'Fire',
    title: 'Quemaduras por fuego',
    component: FireBurn
  },
  {
    key: 'Chemical',
    title: 'Quemaduras por químicos',
    component: ChemicalBurn
  },
  {
    key: 'Electrical',
    title: 'Quemaduras eléctricas',
    component: ElectricalBurn
  },
  {
    key: 'Frozen',
    title: 'Quemaduras por congelación',
    component: FrozenBurn
  }
]