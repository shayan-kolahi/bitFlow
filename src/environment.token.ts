import { InjectionToken } from '@angular/core';
import { environment } from './environment.config';
import { env } from './app.model';

export const ENVIRONMENT = new InjectionToken<env>('environment', {
  providedIn: 'root',
  factory: () => environment
});
