import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from './environments/environment';
import { BusesService } from './services/buses.service';
import { SeatComponent } from './seat/seat.component';

import { SeatSelectionComponent } from './seat-selection/seat-selection.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login/signup', component: SignupComponent },
  { path: 'seat/:Bus_No', component: SeatComponent },
  { path: 'login/signup/login', component: LoginComponent },
  { path: 'seat', component: SeatComponent },

  { path: 'buses', component: SeatSelectionComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,

    SeatComponent,

    SeatSelectionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
  ],
  providers: [BusesService],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
