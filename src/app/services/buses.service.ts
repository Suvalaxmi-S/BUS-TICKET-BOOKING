import { Injectable } from '@angular/core';
import { Bus } from '../bus.model';
@Injectable({
  providedIn: 'root',
})
export class BusesService {
  constructor() {}
  buses: Bus[] = [
    {
      No: 123,
      Name: 'AAA',
      Source: 'Erode',
      Destination: 'Chennai',
      img: './assets/b1.jpg',
    },
    {
      No: 345,
      Name: 'BBB',
      Source: 'Karur',
      Destination: 'Chennai',
      img: './assets/b2.jpg',
    },
    {
      No: 678,
      Name: 'CCC',
      Source: 'Madurai',
      Destination: 'Chennai',
      img: './assets/b3.jpg',
    },
  ];
  getall() {
    return this.buses;
  }
}
