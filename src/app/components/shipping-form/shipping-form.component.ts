import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import Country from 'src/app/core/models/country';
import Region from 'src/app/core/models/region';
import User from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { CountriesService } from 'src/app/core/services/countries/countries.service';
import { RegionsService } from 'src/app/core/services/regions/regions.service';
import { ShippingService } from 'src/app/core/services/shipping/shipping.service';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss'],
})
export class ShippingFormComponent {

  myForm!: FormGroup;
  private fb = inject(FormBuilder);
  private shippingService = inject(ShippingService);
  private countriesService = inject(CountriesService);
  private regionsService = inject(RegionsService);
  private authService = inject(AuthService);
  countries: Observable<Country[]> = this.countriesService.getCountries();
  regions: Observable<Region[]> = this.regionsService.getRegions();
  @Output() shippingCost = new EventEmitter<number>();

  currentUser: User | null = null;

  ngOnInit() {
    this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
    });

    this.myForm = this.fb.group({
      weight: ['', [Validators.required, Validators.min(0.1)]],
      width: ['', [Validators.required, Validators.min(0.1)]],
      height: ['', [Validators.required, Validators.min(0.1)]],
      length: ['', [Validators.required, Validators.min(0.1)]],
      idCountry: ['', [Validators.required]],
      idRegion: ['', [Validators.required]],
    });
  }

  getShipmentCost() {
    if (!this.myForm.valid) {
      return console.log('rellena los campos');;
    }

    const {
      weight,
      width,
      height,
      length,
      idCountry,
      idRegion,
    } = this.myForm.getRawValue();

    const obj = {
      weight,
      width,
      height,
      length,
      idCountry: idCountry.id,
      idRegion: idRegion.idRegion,
      userPlan: this.currentUser?.userPlan || 'FREE',
    };

    this.shippingService.getShippingCosts(obj).subscribe((cost) => {
      this.shippingCost.emit(Number(cost));
    });
  }
}
