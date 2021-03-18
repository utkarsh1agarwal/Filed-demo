import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  inputObj: any;
  _submitted: boolean;
  _validationControl: FormControl;

  constructor() {}

  //input controller data
  @Input() set controllerData(value) {
    this.inputObj = value;
  }

  // Linking parent form
  @Input() parent: FormGroup;

  // Validation from Parent form
  @Input() set validation(value) {
    this._validationControl = value;
  }

  // Checking form is submitted or not
  @Input() set submitted(value: boolean) {
    this._submitted = value;
  }

  //getting the error messages
  get f() {
    return this._validationControl;
  }

  ngOnInit(): void {}
}
