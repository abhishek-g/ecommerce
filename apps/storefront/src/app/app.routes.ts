import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('@ecommerce/feature-product').then(m => m.featureProductRoutes),
  }
];
