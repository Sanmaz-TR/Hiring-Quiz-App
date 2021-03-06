import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from './material.module';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppComponent } from "./app.component";
import { QuizComponent } from "./quiz/quiz.component";
import { HttpClientModule } from "@angular/common/http";
import { AuthGuard } from "./auth.guard";
import { BlankLayoutComponent } from "./layout/blank-layout/blank-layout.component";
import { MasterLayoutComponent } from "./layout/master-layout/master-layout.component";
import { LoginComponent } from "./login/login.component";

export const routes: Routes = [
  {
    path: "", component: BlankLayoutComponent,
    children: [
      {
        path: "", component: LoginComponent
      }
    ]
  },
  {
    path: "", component: MasterLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "quiz", component: QuizComponent 
      }
    ]
  }
];
@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    BlankLayoutComponent,
    MasterLayoutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,

    AngularFireModule.initializeApp(environment.firebase, 'AngularFirebase'),
    AngularFireDatabaseModule,
    AngularFirestoreModule, 
    AngularFireAuthModule,
    AngularFireStorageModule 
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
