import { Component } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-header',
  imports: [
    SvgIconComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  // constructor(@Inject(ENVIRONMENT) private env: env, private asd: HttpClient) {
  //   const headers = new HttpHeaders().set('Authorization', 'Token '+this.env.apiKey);
  //   this.asd.get(this.env.apiUrl + 'users/profile', {headers: headers}).subscribe((res) => {
  //     console.log(res);
  //   })
  // }
}
