import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { ManageLandRecordsService } from '../services/managelandrecords.service';
import { Router } from '@angular/router';
import { LandRecord } from '../models/LandRecord';



@Component({
  selector: 'app-layout-application',
  templateUrl: './layout-application.component.html',
  styleUrls: ['./layout-application.component.css']
})
export class LayoutApplicationComponent implements OnInit {
  layoutForm: FormGroup;
  landRecord: LandRecord = new LandRecord(); //initialize land record object
  submitSuccess: boolean = false;
  lat :number;
  long : number; 
 constructor(private formBuilder: FormBuilder, private manageLandRecordsService: ManageLandRecordsService) { }
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.submitSuccess = false;
    this.lat=null;
    this.long = null;
    this.layoutForm = this.formBuilder.group({
      pid: [''],
      wardNo: [null, Validators.required],
      areaCode: [null, Validators.required],
      siteNo: [null, Validators.required],
      geoData: this.formBuilder.group({
        latitude: [null, Validators.required],
        longitude: [null, Validators.required],
        length: [null, Validators.required],
        width: [null, Validators.required],
        totalArea: '',
        address: [null, Validators.required]
      }),
      preMutationSketch: [null],
      ownerDetails: this.formBuilder.group({
        ownerName: [null, Validators.required],
        gender: [null, Validators.required],
        aadharNo: [null, Validators.required],
        mobileNo: [null, Validators.required],
        emailID: [null, Validators.required],
        address: [null, Validators.required]

      })

    });

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
  
  onSubmit() {
    if (this.layoutForm.valid) {
      console.log('form valid success');
      //sync the form model with the data model
      this.landRecord = <LandRecord>this.layoutForm.value;
      this.landRecord.pid =parseInt(this.landRecord.wardNo.toString().substr(0, 3) + this.landRecord.areaCode.toString().substr(0, 3) + this.landRecord.siteNo.toString().substr(0, 3));
      console.log("pid generated: " + this.landRecord.pid);

      this.manageLandRecordsService.addLandRecordMojani(this.landRecord)
        .subscribe(
        response => {
          console.log("res received addLandRecord service" + JSON.stringify(response));

          if (response !=null && response.success) {
            //  this.router.navigate(['/success', this.landRecord.pid]);
            this.submitSuccess = true;
          }
        });
    } else {
      this.validateAllFormFields(this.layoutForm);
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

  submitNew() {
    this.createForm();
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
