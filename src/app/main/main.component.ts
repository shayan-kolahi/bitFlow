import { Component } from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {BannerComponent} from './components/banner/banner.component';
import {CryptocurrencyPricesComponent} from './components/cryptocurrency-prices/cryptocurrencyPrices.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  imports: [
    HeaderComponent,
    BannerComponent,
    CryptocurrencyPricesComponent
  ],
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
