import { Component, OnInit } from '@angular/core';
import {AthleteService} from "../core/http-services/athlete.service";
import {Athlete} from "../shared/models/athlete";

@Component({
  selector: 'app-athlete',
  templateUrl: './athlete.component.html',
  styleUrls: ['./athlete.component.scss']
})
export class AthleteComponent implements OnInit {

  athletes: Athlete[] = [];
  athleteById?: Athlete;

  constructor(private athleteService: AthleteService) { }

  ngOnInit(): void {
    this.getAllAthletes();
    this.getAthleteById();
  }

  getAllAthletes(){
    this.athleteService.findAllAthletes().subscribe(athletes => {
      this.athletes = athletes;
    })
  }

  getAthleteById(){
    this.athleteService.getAthleteById('997').subscribe(athlete => {
      this.athleteById = athlete;
    })
  }
}
