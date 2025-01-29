import { Component, Inject } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { ENVIRONMENT } from '../../../../environment.token';
import { env } from '../../../../app.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-header',
  imports: [
    SvgIconComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(@Inject(ENVIRONMENT) private env: env, private asd: HttpClient) {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'X-API-Key': this.env.apiKey,
    });
    this.asd.get(this.env.apiUrl + 'v1/account/profile', { headers: httpHeaders }).subscribe((res) => {
      console.log(res);
    })
  }
}
