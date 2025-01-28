import { Component } from '@angular/core';
import {HeaderComponent} from './components/header/header.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  imports: [
    HeaderComponent
  ],
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
