import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '@ecommerce/data-access'; // Replace with the actual path

@Component({
  selector: 'lib-feature-product',
  imports: [CommonModule],
  templateUrl: './feature-product.component.html',
  styleUrl: './feature-product.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureProductComponent {

  productsService = inject(ProductService);

  products$ = this.productsService.getAllProducts();
}
