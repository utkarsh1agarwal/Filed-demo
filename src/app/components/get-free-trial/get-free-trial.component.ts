import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as content from '../../../assets/json/content.json'
import { FreeTrialFormModel } from '../../model/free-trial-form'
import { Store } from '@ngrx/store';
import { GetFreeTrialAppState } from '../../store/state/app.state';
import * as GetFreeTrialAction from '../../store/actions/get-free-trial.action';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-get-free-trial',
  templateUrl: './get-free-trial.component.html',
  styleUrls: ['./get-free-trial.component.scss']
})
export class GetFreeTrialComponent implements OnInit {

  getFreeTrial: FormGroup;
  submitted: boolean = false;
  data = content.components['get-free-trial'];
  GetFreeTrialStore: Observable<FreeTrialFormModel[]>;
  subs: Subscription;
  form_data: FreeTrialFormModel[];


  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private store: Store<GetFreeTrialAppState>,) {
    // declare store
    this.GetFreeTrialStore = this.store.select('getFreeTrialDetails');


  }
  onComingBack() {
    // retieving data on coming back from store
    let data
    this.subs = this.GetFreeTrialStore.subscribe((val) => {
      if (val && val.length > 0) {
        for (var i = 0; i < val.length; i++) {
          this.form_data = val;
        }
      }
      data = this.form_data[this.form_data.length - 1]
      if (data.firstName) {
        //bind store value with form
        this.getFreeTrial.controls.firstName.setValue(data.firstName)
        this.getFreeTrial.controls.lastName.setValue(data.lastName)
        this.getFreeTrial.controls.email.setValue(data.email)
        this.getFreeTrial.controls.budget.setValue(data.budget)
        this.getFreeTrial.controls.phone.setValue(data.phone)
      }
    });

  }

  ngOnInit() {
    this.initalizeForm() // intialize the form
    this.onComingBack()
  }

  initalizeForm() {
    this.getFreeTrial = this.formBuilder.group(
      {
        firstName: [null, [Validators.required]],
        lastName: [null, [Validators.required]],
        email: [null, [Validators.required, Validators.email]],
        budget: [null, [Validators.required]],
        phone: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    if (this.getFreeTrial.valid) {
      this.payload(this.getFreeTrial.controls)
      this.router.navigateByUrl('/show-data')
    }

  }

  // creating payload model & sending data to store
  payload(form) {
    const dataModel = new FreeTrialFormModel();
    dataModel.firstName = this.convertToTitleCase(form.firstName.value);
    dataModel.firstName = this.convertToTitleCase(form.firstName.value);
    dataModel.lastName = form.lastName.value;
    dataModel.email = form.email.value;
    dataModel.budget = form.budget.value;
    dataModel.phone = form.phone.value;
    //dispact data to store
    this.store.dispatch(new GetFreeTrialAction.GetFreeTrialDetailsPost(dataModel));
  }

  // Capitialize the input (Name)
  convertToTitleCase(inputString: string) {
    if (inputString === undefined || inputString === null) {
      return null
    }
    else {
      var convertString = inputString.toLowerCase().split(' ');
      for (var i = 0; i < convertString.length; i++) {
        convertString[i] = convertString[i].charAt(0).toUpperCase() + convertString[i].substring(1);
      }
      return convertString.join(' ');
    }
  }

  // Destroy the object to avoid memory leak
  ngOnDestroy() {
    this.subs.unsubscribe(); 
   }
}
