import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FileUploadService {

  constructor(private http:Http) { }
 
  public uploadFiles(formData : FormData) {
    console.log("Inside File upload service");
   return this.http.post('/uploads/fileUpload', formData)
         .map(files => files.json());
  }


}
