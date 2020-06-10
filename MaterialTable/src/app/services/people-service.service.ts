import { Injectable } from '@angular/core';
import {People} from 'src/app/interfaces/people';
import { dataNames} from 'src/app/Data/peopleData';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
people: People[]= [];
  constructor() {
    this.people = dataNames;
   }
   getMembers(): People[] {
     return this.people;
   }
}
