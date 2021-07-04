import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  filter: string = '';

  setFilter(filterApplied: any) {
    this.filter = filterApplied.value;
  }
}
