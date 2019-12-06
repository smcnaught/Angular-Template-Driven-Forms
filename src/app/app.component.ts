import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public hero = {
    name: "",
    alterEgo: ""
  }
  @ViewChild('heroForm', null) public heroForm: NgForm;
  public submitted = false;

  onSubmit(form) {
    console.log(form.value);
    this.submitted = true;
  }
}
