import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { Provider } from '../interfaces/provider.interface';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getProviders(): Observable<Provider[]> {
    return this.http.get<Provider[]>(`${this.baseUrl}/providers`);
  }

  getProviderById(id: number): Observable<Provider> {
    return this.http.get<Provider>(`${this.baseUrl}/providers/${id}`);
  }

}
