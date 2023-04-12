import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company, Vacancy} from "./models";
import {VacanciesComponent} from "./vacancies/vacancies.component";

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  URL: string = 'http://127.0.0.1:8000/api/companies/'
  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]>{
    return this.http.get<Company[]>(`${this.URL}`);
  }

  getVacancies(id: bigint): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.URL}${id}/vacancies/`)
  }

}
