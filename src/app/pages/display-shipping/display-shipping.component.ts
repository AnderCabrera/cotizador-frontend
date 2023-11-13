import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-display-shipping',
  templateUrl: './display-shipping.component.html',
  styleUrls: ['./display-shipping.component.scss']
})
export class DisplayShippingComponent {
  cost!: number;
  private authService = inject(AuthService);
  public user$ = this.authService.currentUser$;

  ngOnInit(): void {

  }

  public showCost(cost: number): void {
    this.cost = cost;
  }

  public logout(): void {
    this.authService.logout();
  }
}
