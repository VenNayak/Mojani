import { Component, OnInit,NgModule } from '@angular/core';
import { LandRecord } from '../models/LandRecord';
import { ManageLandRecordsService } from '../services/managelandrecords.service';
import { Observable } from 'rxjs';
import { SurveyDataService } from "../services/survey-data.service";

@Component({
  selector: 'app-approve-survey',
  templateUrl: './approve-survey.component.html',
  styleUrls: ['./approve-survey.component.css']
})
export class ApproveSurveyComponent implements OnInit {
  approveSuccess : boolean = false;
  landRecords : LandRecord[];
  approvedRecords : LandRecord[];
  wardNo : number;
  fetchComplete : boolean = false;
  noSearchResults : boolean = false;
  
  constructor(private manageLandRecordsService : ManageLandRecordsService, private surveyData : SurveyDataService) {
   }

  ngOnInit() {
    this.surveyData.currentData.subscribe(records => this.landRecords = records);
    if(this.landRecords!=null && this.landRecords.length > 0){
               this.fetchComplete = true;
               this.noSearchResults= false;
    }
  }

  onSubmit(){
    console.log("ApplicationData" + JSON.stringify(this.landRecords));
    
    //TBD - To add records to block chain
    this.approvedRecords =  this.landRecords.filter(
    (rec) => rec.isMojaniApproved);
    this.manageLandRecordsService.updateMojaniApprovedRecords(this.approvedRecords)
    .subscribe(
      response => {
        console.log("res received updateLandrecordMojani service" + JSON.stringify(response));
        if (response !=null && response.success) {
          //  this.router.navigate(['/success', this.landRecord.pid]);
          this.approveSuccess = true; 
        }   
      });
    
  }

  submitNew(){
        this.landRecords = [];
        this.approveSuccess= false;
        this.wardNo = null;
        this.fetchComplete = false;
  }

  search(){
    console.log("ward No :" + this.wardNo);
    this.manageLandRecordsService.getLandRecordsMojaniByWard(this.wardNo)
    .subscribe(
      response => {
            console.log("res received from getLandRecords service" + JSON.stringify(response));
            if (response !=null) {
              //  this.router.navigate(['/success', this.landRecord.pid]);
              this.landRecords = <LandRecord[]> response.landRecords;
             if(this.landRecords!=null && this.landRecords.length > 0){
               this.noSearchResults= false;
             }else{
               this.noSearchResults = true;
             }
              this.fetchComplete = true;     
              this.surveyData.updateData(this.landRecords);
            }
          });
  }


}



