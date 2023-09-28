import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {}
  data = {
    Booked_status: false,
    BusNo: 456,
    Seat_No: 'SLU-12',
    Seat_type: 'sleeper_upper',
    Gender: '',
    Name: '',
  };
  ngOnInit(): void {
    {
      this.http
        .post(
          'https://sample-eb12c-default-rtdb.asia-southeast1.firebasedatabase.app/seat_bus1.json',
          this.data
        )
        .subscribe((res) => {
          console.log(res);
        });
    }
  }
}
