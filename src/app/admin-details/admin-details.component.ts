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
  seater_count = 0;
  sleeper_lower_count = 0;
  sleeper_upper_count = 0;

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
        console.log('bus1', this.BUS1);

        for (let i of this.BUS1) {
          if (i.Booked_status === true && i.Seat_type === 'seater') {
            this.seater_count += 1;
            console.log(this.seater_count);
          }
          if (i.Booked_status === true && i.Seat_type === 'sleeper_lower') {
            this.sleeper_lower_count += 1;
            console.log(this.sleeper_lower_count);
          }
          if (i.Booked_status === true && i.Seat_type === 'sleeper_upper') {
            this.sleeper_upper_count += 1;
            console.log(this.sleeper_upper_count);
          }
        }
        this.http
          .put(
            'https://sample-eb12c-default-rtdb.asia-southeast1.firebasedatabase.app/BUS/-Nf9jbrhw34KmouAnRzC/BookedSeat_S.json',
            this.seater_count
          )
          .subscribe((res) => {
            console.log(res);
          });
        this.http
          .put(
            'https://sample-eb12c-default-rtdb.asia-southeast1.firebasedatabase.app/BUS/-Nf9jbrhw34KmouAnRzC/BookedSeat_SL_Lower.json',
            this.sleeper_lower_count
          )
          .subscribe((res) => {
            console.log(res);
          });
        this.http
          .put(
            'https://sample-eb12c-default-rtdb.asia-southeast1.firebasedatabase.app/BUS/-Nf9jbrhw34KmouAnRzC/BookedSeat_SL_Upper.json',
            this.sleeper_upper_count
          )
          .subscribe((res) => {
            console.log(res);
          });
        this.seater_count = 0;
        this.sleeper_lower_count = 0;
        this.sleeper_upper_count = 0;
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
        for (let i of this.BUS2) {
          if (i.Booked_status === true && i.Seat_type === 'seater') {
            this.seater_count += 1;
            console.log(this.seater_count);
          }
          if (i.Booked_status === true && i.Seat_type === 'sleeper_lower') {
            this.sleeper_lower_count += 1;
            console.log(this.sleeper_lower_count);
          }
          if (i.Booked_status === true && i.Seat_type === 'sleeper_upper') {
            this.sleeper_upper_count += 1;
            console.log(this.sleeper_upper_count);
          }
        }
        this.http
          .put(
            'https://sample-eb12c-default-rtdb.asia-southeast1.firebasedatabase.app/BUS/-Nf9jw6i4Npf3HZ-Z6gl/BookedSeat_S.json',
            this.seater_count
          )
          .subscribe((res) => {
            console.log(res);
          });
        this.http
          .put(
            'https://sample-eb12c-default-rtdb.asia-southeast1.firebasedatabase.app/BUS/-Nf9jw6i4Npf3HZ-Z6gl/BookedSeat_SL_Lower.json',
            this.sleeper_lower_count
          )
          .subscribe((res) => {
            console.log(res);
          });
        this.http
          .put(
            'https://sample-eb12c-default-rtdb.asia-southeast1.firebasedatabase.app/BUS/-Nf9jw6i4Npf3HZ-Z6gl/BookedSeat_SL_Upper.json',
            this.sleeper_upper_count
          )
          .subscribe((res) => {
            console.log(res);
          });
        this.seater_count = 0;
        this.sleeper_lower_count = 0;
        this.sleeper_upper_count = 0;
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
        for (let i of this.BUS3) {
          if (i.Booked_status === true && i.Seat_type === 'seater') {
            this.seater_count += 1;
            console.log(this.seater_count);
          }
          if (i.Booked_status === true && i.Seat_type === 'sleeper_lower') {
            this.sleeper_lower_count += 1;
            console.log(this.sleeper_lower_count);
          }
          if (i.Booked_status === true && i.Seat_type === 'sleeper_upper') {
            this.sleeper_upper_count += 1;
            console.log(this.sleeper_upper_count);
          }
        }
        this.http
          .put(
            'https://sample-eb12c-default-rtdb.asia-southeast1.firebasedatabase.app/BUS/-Nf9kIbsexDg_-tlKEAZ/BookedSeat_S.json',
            this.seater_count
          )
          .subscribe((res) => {
            console.log(res);
          });
        this.http
          .put(
            'https://sample-eb12c-default-rtdb.asia-southeast1.firebasedatabase.app/BUS/-Nf9kIbsexDg_-tlKEAZ/BookedSeat_SL_Lower.json',
            this.sleeper_lower_count
          )
          .subscribe((res) => {
            console.log(res);
          });
        this.http
          .put(
            'https://sample-eb12c-default-rtdb.asia-southeast1.firebasedatabase.app/BUS/-Nf9kIbsexDg_-tlKEAZ/BookedSeat_SL_Upper.json',
            this.sleeper_upper_count
          )
          .subscribe((res) => {
            console.log(res);
          });
        this.seater_count = 0;
        this.sleeper_lower_count = 0;
        this.sleeper_upper_count = 0;
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
      only_female: false,
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
  // user = {
  //   AvailableSeat_S: '',
  //   AvailableSeat_SL_Lower: '',
  //   AvailableSeat_SL_Upper: '',
  //   Seater_Price: '',
  //   Sleeper_lower_price: '',
  //   Sleeper_upper_price: '',
  //   BusName: '',
  //   BusNo: '',
  //   startsAt: '',
  //   DepartureAt: '',
  //   From: '',
  //   To: '',
  //   img: '',
  // };
  nav() {
    this.router.navigate(['login']);
  }

  formvalue;
  canView: boolean = true;

  formval;
  onSubmit(form: NgForm) {
    if (this.form.valid) {
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
    } else {
      alert('Please enter all the details!');
    }
  }
}
