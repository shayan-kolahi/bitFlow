import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ENVIRONMENT} from '../../environment.token';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, @Inject(ENVIRONMENT) public environment: any) {}

  getStats(dataStatsSrcCurrency: string, dstCurrency: string){
    return this.http.get(`${this.environment.apiUrl}market/stats?srcCurrency=${dataStatsSrcCurrency}&dstCurrency=${dstCurrency}`);
  }
}
