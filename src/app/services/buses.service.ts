import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BusesService {
  constructor() {}

  values: any[] = [];
  selected_seats: any[] = [];
  bus_No;
  select: any[] = [];
  sendata(formValue, selectedItems, bus_No, select) {
    this.values.push(formValue);
    this.selected_seats.push(selectedItems);
    this.bus_No = bus_No;
    this.select = select;
  }
  getdata() {
    return this.values;
  }
  getSeat() {
    return this.selected_seats;
  }
  getBus_No() {
    return this.bus_No;
  }
  getObj() {
    return this.select;
  }
}
