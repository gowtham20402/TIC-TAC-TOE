import { Component, Input } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
  selector: 'app-squares',
  templateUrl: './squares.component.html',
  styleUrls: ['./squares.component.css']
})
export class SquaresComponent {

  @Input()value: 'X' | 'O' | undefined;

}
