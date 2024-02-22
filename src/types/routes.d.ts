/* Routes type */
export interface RouteDrawer {
  key: number;
  title: string;
  children: RouteBeta[] | null;
  show: boolean;
}

export interface RouteDrwerScreen {
  key: number;
  title: string;
  component: any;
  showHeader: boolean;
}

export interface RouteStack {
  key: string;
  title: string;
  component: any;
}

/* Clasification type */
export interface Clasification {
  id: number;
  title: string;
  conversesmith: string;
  denominationABA: string;
  histologycLevel: string;
  pronostic: string;
}