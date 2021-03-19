import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FreeTrialFormModel } from '../../model/free-trial-form';
import { GetFreeTrialAppState } from '../../store/state/app.state';
import * as GetFreeTrialAction from '../../store/actions/get-free-trial.action';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss'],
})
export class DisplayDataComponent implements OnInit {
  GetFreeTrialStore: Observable<FreeTrialFormModel[]>;
  subs: Subscription;
  form_data: FreeTrialFormModel[]
  table_data: FreeTrialFormModel;

  constructor(
    private router: Router,
    private store: Store<GetFreeTrialAppState>,
    private payService: PaymentService
  ) {
    this.GetFreeTrialStore = this.store.select('getFreeTrialDetails');

    //  subscribing data from store
    this.subs = this.GetFreeTrialStore.subscribe((val) => {
      if (val && val.length > 0) {
        for (var i = 0; i < val.length; i++) {
          this.form_data = val;
        }
      }
    });
    this.table_data = this.form_data[1]
  }

  onSubmit() {
    alert("No Payment Url found")
    this.payService.paymentRequest("dummy").subscribe(res => {
      // to be written
    })
  }

  onBack() {
    this.router.navigateByUrl('/get-free-trial')
  }

  ngOnInit(): void { }

  // Destroy the object to avoid memory leak
  ngOnDestroy() {
    this.subs.unsubscribe(); 
  }
}
