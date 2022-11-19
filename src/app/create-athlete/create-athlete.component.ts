import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AthleteService } from '../core/http-services/athlete.service';
import {Gender} from '../shared/enums/gender.enum';

@Component({
    selector: 'app-create-athlete',
    templateUrl: './create-athlete.component.html',
    styleUrls: ['./create-athlete.component.scss']
})
export class CreateAthleteComponent {

    createAthleteForm: FormGroup;


   genders: string[] = ['MALE', ' FEMALE'];

    constructor(
        private formBuilder: FormBuilder,
        private athleteService: AthleteService) {
    
        this.createAthleteForm = this.formBuilder.group({
            firstName: [''],
            lastName: [''],
            height: [''],
            weight: [''],
            gender: ['MALE']
        });
    }

    onSubmit(): void { 
        this.athleteService.createAthlete(this.createAthleteForm.value).subscribe();
    }
}
