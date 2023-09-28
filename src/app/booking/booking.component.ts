import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusesService } from '../services/buses.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  values: any[] = [];
  selected_bus: any[] = [];
  bus_No;
  select: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private busSer: BusesService,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    this.values = this.busSer.getdata();
    this.selected_bus = this.busSer.getSeat();
    this.bus_No = this.busSer.getBus_No();
    this.select = this.busSer.getObj();
    let i = 0;
    const flattenedArray = this.values.flat(Infinity);
    console.log('FLATTERENED ARRAY', flattenedArray);
    if (this.bus_No == '456') {
      this.http
        .post(
          'https://sample-eb12c-default-rtdb.asia-southeast1.firebasedatabase.app/Booked_bus1.json',
          [flattenedArray, this.selected_bus]
        )
        .subscribe((res) => {
          console.log(res);
        });
      this.select.forEach((item, index) => {
        const id = item.id;
        const seat_no = item.Seat_No;
        const Seat_type = item.Seat_type;
        const update_values = {
          Booked_status: true,
          BusNo: 456,
          Gender: flattenedArray[index].gender,
          Name: flattenedArray[index].name,
          Seat_No: seat_no,
          Seat_type: Seat_type,
          id: id,
        };
        console.log('Updating:', update_values);
        this.http
          .put(
            `https://sample-eb12c-default-rtdb.asia-southeast1.firebasedatabase.app/seat_bus1/${id}.json`,
            update_values
          )
          .subscribe((res) => {
            console.log(res);
          });
      });
    }

    if (this.bus_No == '789') {
      this.http
        .post(
          'https://sample-eb12c-default-rtdb.asia-southeast1.firebasedatabase.app/Booked_bus2.json',
          [flattenedArray, this.selected_bus]
        )
        .subscribe((res) => {
          console.log(res);
        });
      this.select.forEach((item, index) => {
        const id = item.id;
        const seat_no = item.Seat_No;
        const Seat_type = item.Seat_type;
        const update_values = {
          Booked_status: true,
          BusNo: 789,
          Gender: flattenedArray[index].gender,
          Name: flattenedArray[index].name,
          Seat_No: seat_no,
          Seat_type: Seat_type,
          id: id,
        };
        console.log('Updating:', update_values);
        this.http
          .put(
            `https://sample-eb12c-default-rtdb.asia-southeast1.firebasedatabase.app/seat_bus2/${id}.json`,
            update_values
          )
          .subscribe((res) => {
            console.log(res);
          });
      });
    }
    if (this.bus_No == '985') {
      this.http
        .post(
          'https://sample-eb12c-default-rtdb.asia-southeast1.firebasedatabase.app/Booked_bus3.json',
          [flattenedArray, this.selected_bus]
        )
        .subscribe((res) => {
          console.log(res);
        });
      this.select.forEach((item, index) => {
        const id = item.id;
        const seat_no = item.Seat_No;
        const Seat_type = item.Seat_type;
        const update_values = {
          Booked_status: true,
          BusNo: 985,
          Seat_No: seat_no,
          Gender: flattenedArray[index].gender,
          Name: flattenedArray[index].name,
          Seat_type: Seat_type,
          id: id,
        };
        console.log('Updating:', update_values);
        this.http
          .put(
            `https://sample-eb12c-default-rtdb.asia-southeast1.firebasedatabase.app/seat_bus3/${id}.json`,
            update_values
          )
          .subscribe((res) => {
            console.log(res);
          });
      });
    }

    console.log('select:', this.selected_bus);
    console.log('values', this.values);
  }
}
