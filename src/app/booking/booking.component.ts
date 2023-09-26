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
  constructor(private route: ActivatedRoute, private busSer: BusesService) {}
  ngOnInit(): void {
    this.values = this.busSer.getdata();
    console.log(this.values);
  }
}
