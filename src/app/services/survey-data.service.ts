import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {LandRecord} from '../models/LandRecord';

@Injectable()
export class SurveyDataService {


  private sharedData = new BehaviorSubject<LandRecord[]>([]);
  currentData = this.sharedData.asObservable();

  constructor() { 
    
  }
  updateData(records : LandRecord[]) {
      this.sharedData.next(records);
  }
}
