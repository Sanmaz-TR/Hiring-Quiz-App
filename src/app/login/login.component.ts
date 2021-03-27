import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { FormControl, FormGroup } from '@angular/forms';
import * as uuid from "uuid";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  Username: string =  "Dummy";
  Email: string = "Dummy";
  form: FormGroup = new FormGroup(
    {
      username: new FormControl(""),
      email: new FormControl("")
  });
  
  constructor(private _router: Router, private _store: StorageService) {}

  ngOnInit() {
    sessionStorage[this.Username] = "sanch";
    sessionStorage[this.Email] = "sanch@gmail.com";
  }
  submit() {
    if (this.form.valid) {
      const guid = uuid.v4();
      this._store.sessionId = guid;
      this._store.sessionUsername = this.form.value.username;
      this._router.navigate(["/quiz"]);
    }
  }

}
