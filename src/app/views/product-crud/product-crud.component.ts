import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css'],
})
export class ProductCrudComponent implements OnInit {
  coolAttribute = 'anything';

  constructor() {}

  ngOnInit(): void {}

  doSomething(): void {
    console.log('Doing something');
  }
}
