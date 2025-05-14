import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CartStore, Product, ProductService } from '@ecommerce/data-access';
import { switchMap } from 'rxjs';

@Component({
  selector: 'lib-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailComponent {

  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private cartStore = inject(CartStore);

  product$ = this.route.params.pipe(
    switchMap((params) => this.productService.getProductById(params['id']))
  );


  addToCart(product: Product) {
    this.cartStore.addToCart(product);
  }
}
