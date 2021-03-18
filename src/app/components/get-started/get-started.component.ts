import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss'],
})
export class GetStartedComponent implements OnInit {
  getStarted: FormGroup;
  submitted: boolean = false;
  budgets = [
    { value: 'select', name: 'Select' },
    { value: '1', name: '$200' },
    { value: '2', name: '$500' },
    { value: '3', name: '$700' },
    { value: '4', name: '$1000' },
  ];
  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initalizeForm(); //initalize form
  }
  initalizeForm() {
    this.getStarted = this.formBuilder.group({
      convert: ['yes', [Validators.required]],
      budget: ['select', [Validators.required]],
    });
  }

  //on submit form
  onSubmit() {
    this.submitted = true;
    if (this.getStarted.controls.budget.value !== 'select' && this.getStarted.valid) {
      this.router.navigateByUrl('/get-free-trial');
    }
  }

  //getting the error messages
  get f() {
    return this.getStarted.controls;
  }
}
