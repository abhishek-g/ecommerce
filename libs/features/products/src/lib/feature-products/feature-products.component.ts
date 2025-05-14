import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-feature-products',
  imports: [CommonModule],
  templateUrl: './feature-products.component.html',
  styleUrl: './feature-products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureProductsComponent {}
