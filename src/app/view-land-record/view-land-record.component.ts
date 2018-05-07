import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { ActivatedRoute, Params , Router} from '@angular/router'; 
import { Location } from '@angular/common';

import { ManageLandRecordsService } from '../services/managelandrecords.service';
import { LandRecord } from '../models/LandRecord';
import 'rxjs/add/operator/switchMap'; 

@Component({
  selector: 'app-viewlandrecord',
  templateUrl: './view-land-record.component.html',
  styleUrls: ['./view-land-record.component.css']
})
export class ViewlandrecordComponent implements OnInit {

  layoutForm: FormGroup;
  landRecord: LandRecord = new LandRecord(); //initialize land record object
  submitSuccess: boolean = false;
  lat :number;
  long : number; 
 constructor(private formBuilder: FormBuilder,private location: Location, private manageLandRecordsService: ManageLandRecordsService, private router: Router,private route: ActivatedRoute) { }
  ngOnInit() {
    this.loadForm();
  }

  loadForm() {
    this.submitSuccess = false;
    this.lat=null;
    this.long = null;
    this.layoutForm = this.formBuilder.group({
      pid: [''],
      wardNo: [null],
      areaCode: [null,],
      siteNo: [null,],
      geoData: this.formBuilder.group({
        latitude: [null],
        longitude: [null],
        length: [null],
        width: [null],
        totalArea: '',
        address: [null]
      }),
      preMutationSketch: [null],
      ownerDetails: this.formBuilder.group({
        ownerName: [null],
        gender:[null],
        aadharNo: [null],
        mobileNo: [null],
        emailID:[null],
        address: [null]
      })

    });
    this.route.params
          .switchMap((params: Params) => this.manageLandRecordsService.getLandRecordsMojaniByPid(+params['id']))
          .subscribe(
            response => {
              console.log("res received getLandRecordbyPid service" + JSON.stringify(response));
              if (response !=null && response.success) {
                this.landRecord =<LandRecord> response.landRecords; 
                console.log("landRecord object received:" + this.landRecord);
                this.layoutForm.patchValue(this.landRecord);
                this.setGeoCordinates();
              }
              }); 

  }

  onSubmit(){
    this.location.back();

  }
  isFieldValid(field: string) {
    return !this.layoutForm.get(field).valid && this.layoutForm.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }


  setGeoCordinates(){
    this.lat = parseFloat(this.layoutForm.get('geoData.latitude').value);
    this.long =parseFloat( this.layoutForm.get('geoData.longitude').value);
  }
  calculateTotalArea(){
    let length =  parseFloat(this.layoutForm.get('geoData.length').value);
    let width =  parseFloat(this.layoutForm.get('geoData.width').value);
    let totalArea = length * width ; 
    if(!isNaN(totalArea)){
    console.log("Total Area: " + totalArea);
     this.layoutForm.patchValue({'geoData' : {'totalArea' : totalArea}});
    }
  }
  

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      console.log("file :" + file);

    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
