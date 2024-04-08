import { Clasification } from "src/types/clasification";

const data: Clasification[] = [
  {
    id: 1,
    title: "Primer grado",
    conversesmith: "Primer grado",
    denominationABA: "Epidérmica",
    histologycLevel: "Epidermis",
    pronostic: "No necesita injeros, debe curar espontáneamente en 7 días sin secuelas"
  },
  {
    id: 2,
    title: "Segundo grado superficial",
    conversesmith: "Segundo grado superficial",
    denominationABA: "Dérmica superficial",
    histologycLevel: "Epidermis Dermis papilar",
    pronostic: "Debería epitelizar espontáneamente en 15 días con secuelas estéticas. Si se complica puede profundizarse"
  },
  {
    id: 3,
    title: "Segundo grado profundo",
    conversesmith: "Segundo grado profundo",
    denominationABA: "Dérmica profunda",
    histologycLevel: "Epidermis Dermis papilar",
    pronostic: "Habitualmente termina en injerto con secuelas estéticas y/o funcionales. Puede requerir escarectomía tangencial"
  },
  {
    id: 4,
    title: "Tercer grado",
    conversesmith: "Tercer grado",
    denominationABA: "Espesor total",
    histologycLevel: "Epidermis o tejido celular subcutáneo",
    pronostic: "Requiere escarectomía precoz, e injerto o colgajos"
  }
]

export default data;