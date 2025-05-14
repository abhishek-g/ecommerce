import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartStore, Product } from '@ecommerce/data-access';

@Component({
  selector: 'lib-feature-cart',
  imports: [CommonModule],
  templateUrl: './feature-cart.component.html',
  styleUrl: './feature-cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureCartComponent {
  readonly cartStore = inject(CartStore);
  readonly items = this.cartStore.items;
  readonly total = this.cartStore.total;

  remove(id: number) {
    this.cartStore.removeFromCart(id);
  }

  clear() {
    this.cartStore.clearCart();
  }

  increaseQuantity(product: Product) {
    this.cartStore.addToCart(product);
  }

  decreaseQuantity(productId: number) {
    const item = this.cartStore.items().find(i => i.product.id === productId);
    if (!item) return;

    if (item.quantity === 1) {
      this.cartStore.removeFromCart(productId);
    } else {
      this.cartStore.updateQuantity(productId, item.quantity - 1);
    }
  }
}
