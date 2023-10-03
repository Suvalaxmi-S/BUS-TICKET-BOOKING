import { Component, OnInit } from '@angular/core';
import { BUS } from './seatModel.model';
import { HttpClient } from '@angular/common/http';
import { Pipe } from '@angular/core';
import { map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NumberFormatStyle } from '@angular/common';

@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.css'],
})
export class SeatSelectionComponent implements OnInit {
  searchTerm: string;
  Bus_info;
  search_bus;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  buses = {
    BusNo: 985,
    BusName: 'Jai Travels',
    From: 'madurai',
    To: 'Chennai',
    AvailableSeat_S: 18,
    AvailableSeat_SL_Upper: 15,
    AvailableSeat_SL_Lower: 5,
    BookedSeat_S: 0,
    BookedSeat_SL_Upper: 0,
    BookedSeat_SL_Lower: 0,
    startsAt: '4:00 PM',
    DepartureAt: '2:00 AM',
    Seater_Price: 700,
    Sleeper_upper_price: 1100,
    Sleeper_lower_price: 1200,
  };
  seat = {
    Booked_status: false,
    BusNo: 985,
    Gender: '',
    Seat_No: 'SLU-10',
    Seat_type: 'sleeper_upper',
  };
  ngOnInit() {
    this.http
      .get(
        'https://sample-eb12c-default-rtdb.asia-southeast1.firebasedatabase.app/BUS.json'
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
        this.Bus_info = res;
        this.search_bus = res;
        console.log(this.Bus_info);
      });
  }

  search() {
    if (this.searchTerm) {
      this.search_bus = this.Bus_info.filter((bus) =>
        bus.To.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.search_bus = this.Bus_info;
    }
  }
}
