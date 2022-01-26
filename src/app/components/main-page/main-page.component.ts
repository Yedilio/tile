import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [trigger('enterAnimation', [
    transition(':enter', [
      style({ transform: 'translateX(20%)'}),
      animate('650ms ease-in', style({ transform: 'translateX(0)'})),
    ]),
  ])]
})
export class MainPageComponent implements OnInit {
  isSearch: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
