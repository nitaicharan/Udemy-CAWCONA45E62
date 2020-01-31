import { Component, OnInit, ContentChild, Input, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'mt-input-contaner',
  templateUrl: './input-contaner.component.html',
  styleUrls: ['./input-contaner.component.css']
})
export class InputContanerComponent implements OnInit, AfterContentInit {
  @ContentChild(NgModel)
  input: NgModel;
  @Input()
  errorMessage: string;
  @Input()
  label: string;
  constructor() { }
  ngOnInit() {
  }
}
