import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { pipe, map } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css'],
})
export class AdminDetailsComponent implements OnInit {
  canAdd: boolean = false;
  BUS1: any[] = [];
  BUS2: any[] = [];
  BUS3: any[] = [];
  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit() {
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
  add() {
    this.canAdd = true;
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
    AvailableSeat_SL_Lower: '',
    AvailableSeat_SL_Upper: '',
    Seater_Price: '',
    Sleeper_lower_price: '',
    Sleeper_upper_price: '',
    BusName: '',
    BusNo: '',
    startsAt: '',
    DepartureAt: '',
    From: '',
    To: '',
    img: '',
  };
  nav() {
    this.router.navigate(['login']);
  }

  formvalue;
  canView: boolean = true;

  formval;
  onSubmit(form: NgForm) {
    this.formval = this.form.value;
    console.log(this.formval);
    this.http
      .post(
        'https://sample-eb12c-default-rtdb.asia-southeast1.firebasedatabase.app/BUS.json',
        this.formval
      )
      .subscribe((res) => {
        console.log(res);
        alert('BUS ADDED SUCCESSFULLY!!');
        this.form.reset();
        this.canAdd = false;
      });
  }
}
