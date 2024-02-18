  

export interface RouteDrawer {
  key: string | number;
  title: string;
  component: any;
  parent: string | null;
  isParent: boolean;
  showHeader: boolean;
}

export interface RouteStack {
  key: string;
  title: string;
  component: any;
}
