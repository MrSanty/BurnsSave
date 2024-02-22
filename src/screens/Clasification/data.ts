import { Clasification } from "src/types/clasification";

const data: Clasification[] = [
  {
    id: 1,
    title: "Primer grado",
    conversesmith: "Primer grado",
    denominationABA: "Epidérmica",
    histologycLevel: "Epidermis",
    pronostic: "No necesita injeros, debe curar espontáneamente en 7 días sin secuelas",
    maxHeigth: 110
  },
  {
    id: 2,
    title: "Segundo grado superficial",
    conversesmith: "Segundo grado superficial",
    denominationABA: "Dérmica superficial",
    histologycLevel: "Epidermis\nDermis papilar",
    pronostic: "Debería epidermizar espontáneamente en 15 días con secuelas estéticas. Si se complica puede profundizarse",
    maxHeigth: 140
  },
  {
    id: 3,
    title: "Segundo grado profundo",
    conversesmith: "Segundo grado profundo",
    denominationABA: "Dérmica profunda",
    histologycLevel: "Epidermis\nDermis papilar y reticular sin afectar fanéreos profundos",
    pronostic: "Habitualmente termina en injerto con secuelas estéticas y/o funcionales. Puede requerir escarectomía tangencial",
    maxHeigth: 160
  },
  {
    id: 4,
    title: "Tercer grado",
    conversesmith: "Tercer grado",
    denominationABA: "Espesor total",
    histologycLevel: "Epidermis\nDermis e hipodermis pudiendo llegar inclusive hasta el plano muscular y óseo",
    pronostic: "Requiere escarectomía precoz, e injerto o colgajos",
    maxHeigth: 140
  }
]

export default data;