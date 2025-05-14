import { computed, Injectable, signal } from '@angular/core';
import { CartItem, Product } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class CartStore {

  private readonly _items = signal<CartItem[]>([]);

  readonly items = computed(() => this._items());
  readonly total = computed(() =>
    this._items().reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  );

  addToCart(product: Product): void {
    const items = this._items();
    const index = items.findIndex(item => item.product.id === product.id);

    if (index >= 0) {
      items[index].quantity += 1;
    } else {
      items.push({ product, quantity: 1 });
    }

    this._items.set([...items]);
  }

  removeFromCart(productId: number): void {
    const items = this._items().filter(item => item.product.id !== productId);
    this._items.set(items);
  }

  clearCart(): void {
    this._items.set([]);
  }

  updateQuantity(productId: number, quantity: number): void {
    if (quantity < 1) return;
    const items = this._items().map(item =>
      item.product.id === productId ? { ...item, quantity } : item
    );
    this._items.set(items);
  }
}
