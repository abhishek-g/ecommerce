import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-feature-cart',
  imports: [CommonModule],
  templateUrl: './feature-cart.component.html',
  styleUrl: './feature-cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureCartComponent {}
