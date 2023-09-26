import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BusesService {
  constructor() {}

  values: any[] = [];
  sendata(formValue) {
    this.values.push(formValue);
  }
  getdata() {
    return this.values;
  }
}
