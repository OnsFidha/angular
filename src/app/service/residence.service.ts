import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Residence } from '../core/models/Residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
  private URL = "http://localhost:3000/residences";

  constructor(private http: HttpClient) {}

  getResidence(): Observable<Residence[]> {
    return this.http.get<Residence[]>(this.URL);
  }
  getResidenceById(id:number): Observable<Residence[]> {
    return this.http.get<Residence[]>("http://localhost:3000/residences/"+id);
  }
  addResidence(residence:Residence): Observable<Residence[]> {
    return this.http.post<Residence[]>("http://localhost:3000/residences/",residence);
  }
  deleteResidence(id: number): Observable<void> {
    return this.http.delete<void>(`${this.URL}/${id}`);
  }
  
}
