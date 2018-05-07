import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { LandRecord } from '../models/LandRecord';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ManageLandRecordsService {

  constructor(private http: Http) { }

  // API: GET /landRecords/:wardNo
  public getLandRecordsMojaniByWard(wardNo: number) : Observable<any> {
    console.log("Inside getLandRecordsMojaniByWard method in manageLandRecord service");
    return this.http.get('/manageLandRecords/api/getLandRecordsMojaniByWard/'+wardNo) 
    .map(res => res.json() );
  }

    // API: GET /landRecords/:pId
  public getLandRecordsMojaniByPid(pId: number) : Observable<any> {
      console.log("Inside getLandRecordsMojaniByPid method in manageLandRecord service");
      return this.http.get('/manageLandRecords/api/getLandRecordsMojaniByPid/'+pId) 
      .map(res => res.json() );
  }

  // API: POST /landRecords/landRecord
  public addLandRecordMojani(landRecord: LandRecord){
    console.log("Inside addLandRecordMojani method in manageLandRecord service");
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/manageLandRecords/api/addLandRecordMojani', JSON.stringify(landRecord), { headers: headers })
      .map(res => res.json());     
  }


    // API: POST /landRecords/landRecord[]
  public updateMojaniApprovedRecords(landRecords: LandRecord[]){
      console.log("Inside updateMojaniApprovedRecords method in manageLandRecord service");
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post('/manageLandRecords/api/updateMojaniApprovedStatus', JSON.stringify(landRecords), { headers: headers })
        .map(res => res.json());     
    }


}
