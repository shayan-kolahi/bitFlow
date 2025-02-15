import { Component } from '@angular/core';
import {TableModule} from 'primeng/table';
import {ApiService} from '../../api.service';

@Component({
  selector: 'app-cryptocurrencyPrices',
  templateUrl: './cryptocurrencyPrices.component.html',
  imports: [
    TableModule
  ],
  styleUrl: './cryptocurrencyPrices.component.scss'
})
export class CryptocurrencyPricesComponent {

  constructor(public api: ApiService) {
    this.api.getStats().subscribe((item) => {
      console.log(item)
    });
  }


}
