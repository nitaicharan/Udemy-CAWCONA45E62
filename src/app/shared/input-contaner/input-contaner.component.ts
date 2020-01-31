import { Component, OnInit, ContentChild, Input, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'mt-input-contaner',
  templateUrl: './input-contaner.component.html',
  styleUrls: ['./input-contaner.component.css']
})
export class InputContanerComponent implements OnInit, AfterContentInit {
  @ContentChild(NgModel) model: NgModel;
  @Input() errorMessage: string
  @Input() label: string
  input: any;

  constructor() { }

  ngOnInit() {
  }

  hasSuccess = (): boolean => this.input.valid && (this.input.dirty || this.input.touched);
  hasError = (): boolean => this.input.invalid && (this.input.dirty || this.input.touched);

  ngAfterContentInit():void {
    this.input = this.model;
    if (!this.input === undefined) {
      throw new Error('Esse componente precisa ser usado com uma directiva ngModel')
    }
  }
}
