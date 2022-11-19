import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Athlete} from "../../shared/models/athlete";

@Injectable({
  providedIn: 'root'
})
export class AthleteService {

  constructor(private httpClient: HttpClient) { }

  findAllAthletes(): Observable<Athlete[]>{
    return this.httpClient.get<Athlete[]>('http://localhost:8080/athlete/findAll');
  }

  getAthleteById(id: string): Observable<Athlete>{
    return this.httpClient.get<Athlete>('http://localhost:8080/athlete/' + id);
  }

  createAthlete(athlete: Athlete){
    return this.httpClient.post('http://localhost:8080/athlete/createAthlete', athlete);
  }
}
