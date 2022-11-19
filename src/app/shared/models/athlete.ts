import {Gender} from "../enums/gender.enum";

export interface Athlete{
  firstName: string;
  lastName: string;
  height: number;
  weight: number;
  gender: Gender;
}
