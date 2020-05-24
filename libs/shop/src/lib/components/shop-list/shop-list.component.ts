import { Component, OnInit } from '@angular/core';

import style from './shop-list.component.scss'
import template from './shop-list.component.html'

@Component({
  selector: 'module-federation-repro-shop-list',
  template,
  styles: [style]
})
export class ShopListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
