import { Component, OnInit, ViewChild } from '@angular/core';
import { BusesService } from '../services/buses.service';
import { HttpClient } from '@angular/common/http';
import { pipe, map } from 'rxjs';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  email: string = '';
  password: string = '';
  loginForm: FormGroup;
  BUS1: any[] = [];
  BUS2: any[] = [];
  BUS3: any[] = [];
  formValues: any[] = [];
  selected_seats: any[] = [];
  bus_No;
  canView: boolean = false;
  result;
  constructor(
    private busSer: BusesService,
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
          ),
        ],
      ],
    });
    this.selected_seats = this.busSer.getSeat();
    this.bus_No = this.busSer.getBus_No();
    this.formValues = this.busSer.getdata();
    console.log(this.selected_seats, this.bus_No, this.formValues);
  }
  view_details() {}

  login() {
    if (this.email === 'admin@gmail.com' && this.password === 'Admin@123') {
      this.canView = true;

      this.http
        .get(
          'https://sample-eb12c-default-rtdb.asia-southeast1.firebasedatabase.app/seat_bus1.json'
        )
        .pipe(
          map((data) => {
            const dataEntryed = [];
            for (const key in data) {
              if (data.hasOwnProperty(key)) {
                dataEntryed.push({ ...data[key], id: key });
              }
            }
            return dataEntryed;
          })
        )
        .subscribe((res) => {
          this.BUS1 = res;
        });

      this.http
        .get(
          'https://sample-eb12c-default-rtdb.asia-southeast1.firebasedatabase.app/seat_bus2.json'
        )
        .pipe(
          map((data) => {
            const dataEntryed = [];
            for (const key in data) {
              if (data.hasOwnProperty(key)) {
                dataEntryed.push({ ...data[key], id: key });
              }
            }
            return dataEntryed;
          })
        )
        .subscribe((res) => {
          this.BUS2 = res;
        });

      this.http
        .get(
          'https://sample-eb12c-default-rtdb.asia-southeast1.firebasedatabase.app/seat_bus3.json'
        )
        .pipe(
          map((data) => {
            const dataEntryed = [];
            for (const key in data) {
              if (data.hasOwnProperty(key)) {
                dataEntryed.push({ ...data[key], id: key });
              }
            }
            return dataEntryed;
          })
        )
        .subscribe((res) => {
          this.BUS3 = res;
        });
    }
  }

  delete_ticket(bus) {
    const upd = {
      Booked_status: false,
      BusNo: bus.BusNo,
      Gender: '',
      Name: '',
      Seat_No: bus.Seat_no,
      Seat_type: bus.Seat_type,
      id: bus.id,
    };
    if (bus.BusNo == 456) {
      this.http
        .put(
          `https://sample-eb12c-default-rtdb.asia-southeast1.firebasedatabase.app/seat_bus1/${bus.id}.json`,
          upd
        )
        .subscribe((res) => {
          console.log(res);
        });
    }
    if (bus.BusNo == 789) {
      this.http
        .put(
          `https://sample-eb12c-default-rtdb.asia-southeast1.firebasedatabase.app/seat_bus2/${bus.id}.json`,
          upd
        )
        .subscribe((res) => {
          console.log(res);
        });
    }
    if (bus.BusNo == 985) {
      this.http
        .put(
          `https://sample-eb12c-default-rtdb.asia-southeast1.firebasedatabase.app/seat_bus3/${bus.id}.json`,
          upd
        )
        .subscribe((res) => {
          console.log(res);
        });
    }
  }
  @ViewChild('f') form: NgForm;
  user = {
    AvailableSeat_S: '',
    Available_Sleeper_Lower: '',
    Available_Sleeper_Upper: '',
    BusName: '',
    BusNo: '',
    Start: '',
    Departure: '',
    From: '',
    To: '',
  };
  nav() {
    this.router.navigate(['login']);
  }
  canAdd: boolean = false;
  formvalue;
  add() {
    this.canAdd = true;
  }
  users = {
    name: 'suva',
  };
  onSubmit(form: NgForm) {
    this.user.AvailableSeat_S = this.form.value.AvailableSeat_S;
    console.log(this.user);
    this.http
      .post(
        'https://sample-eb12c-default-rtdb.asia-southeast1.firebasedatabase.app/BUS.json',
        this.user
      )
      .subscribe((res) => {
        console.log(res);
        alert('BUS ADDED SUCCESSFULLY!!');
        this.form.reset();
        this.canAdd = false;
      });
  }
}
