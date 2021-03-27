import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from  "../../services/storage.service";

@Component({
  selector: 'app-master-layout',
  templateUrl: './master-layout.component.html',
  styleUrls: ['./master-layout.component.scss']
})
export class MasterLayoutComponent implements OnInit {
  Username: string;
  Email: string;
  constructor(private _router: Router, private _store: StorageService) {
    this.Username = this._store.sessionUsername;
    this.Email = this._store.sessionEmail;
  }
  

    ngOnInit(): void {
  }
  
   logout() {
    this._store.deleteSession();
    this._router.navigate([""]);
  }

}
