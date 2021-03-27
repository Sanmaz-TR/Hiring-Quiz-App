import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class StorageService {
  Id: string = "Id";
  Username: string = "Username";
  Email: string = "Email";
  
  get sessionId(): any {
    return sessionStorage[this.Id] ? sessionStorage[this.Id] : undefined;
  }
  get sessionUsername(): any {
    return sessionStorage[this.Username]
      ? sessionStorage[this.Username]
      : undefined;
  }
  get sessionEmail(): any {
    return sessionStorage[this.Email]
      ? sessionStorage[this.Email]
      : undefined;
  }
  set sessionId(value: any) {
    sessionStorage[this.Id] = value;
  }
  set sessionUsername(value: any) {
    sessionStorage[this.Username] = value;
  }
  set sessionEmail(value: any) {
    sessionStorage[this.Email] = value;
  }
  deleteSession(): void {
    sessionStorage.removeItem(this.Id);
    sessionStorage.removeItem(this.Username);
    sessionStorage.removeItem(this.Email);
  }

  get localId(): any {
    return localStorage[this.Id] ? localStorage[this.Id] : undefined;
  }
  get localUsername(): any {
    return localStorage[this.Username]
      ? localStorage[this.Username]
      : undefined;
  }
  get localEmail(): any {
    return localStorage[this.Email]
      ? localStorage[this.Email]
      : undefined;
  }
  set localId(value: any) {
    localStorage[this.Id] = value;
  }
  set localUsername(value: any) {
    localStorage[this.Username] = value;
  }
  set localEmail(value: any) {
    localStorage[this.Email] = value;
  }
  deleteLocal(): void {
    localStorage.removeItem(this.Id);
    localStorage.removeItem(this.Username);
    localStorage.removeItem(this.Email);
  }
}
