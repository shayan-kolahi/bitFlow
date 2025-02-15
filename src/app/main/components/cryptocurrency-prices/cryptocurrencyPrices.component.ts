import {Component, OnInit} from '@angular/core';
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
export class CryptocurrencyPricesComponent implements OnInit {
  dataGetStats:any;
  constructor(public api: ApiService) {}

  ngOnInit(): void {
    this.api.getStats('btc,usdt','rls').subscribe((item: any) => {
      console.log(item)
      this.dataGetStats = item.stats;
    });
  }


}
