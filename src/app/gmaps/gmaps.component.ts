import { Component, OnInit,Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-gmaps',
  templateUrl: './gmaps.component.html',
  styleUrls: ['./gmaps.component.css']
})
export class GmapsComponent implements OnInit {
  @Input() lat:number;
  @Input() lng:number;
  constructor(){
  }
  ngOnInit() {
  }
}
