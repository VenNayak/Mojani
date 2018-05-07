import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-validation-error',
  templateUrl: './show-validation-error.component.html',
  styleUrls: ['./show-validation-error.component.css']
})
export class ShowValidationErrorComponent implements OnInit {
  @Input() errorMsg: string;
  @Input() displayError: boolean;
  constructor() { }

  ngOnInit() {
  }

}
