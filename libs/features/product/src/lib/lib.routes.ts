import { Route } from '@angular/router';
import { FeatureProductComponent } from './feature-product/feature-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const featureProductRoutes: Route[] = [
  { path: '', component: FeatureProductComponent },
  { path: 'product/:id', component: ProductDetailComponent },
];
