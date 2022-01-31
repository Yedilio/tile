import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  animations: [
    trigger('enterAnim', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('50ms ease-in', style({ opacity: 0 })),
        animate('350ms ease-in', style({ opacity: '*' })),
      ]),
    ]),
  ],
})
export class SearchBarComponent implements OnInit {
  str: string = '';
  isSearch: boolean = false;
  searchBlock: boolean = false;
  option: number = null;

  constructor() {}

  ngOnInit(): void {
    if (window.innerWidth <= 415) {
      this.searchBlock = true;
    }
  }

  setSearch() {
    this.isSearch = !this.isSearch;
  }

  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent) {
    console.log('event1 :', event);
    // your click logic
    event.stopPropagation();
  }
}
