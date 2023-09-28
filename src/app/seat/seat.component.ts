import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe, map } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { BusesService } from '../services/buses.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray, ValidatorFn } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';
interface Seat {
  seatNo: string;
  gender: string; // Assuming gender is a string, you might want to use a more specific type
  adjacent: string;
  // ... other properties if needed
}

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css'],
})
export class SeatComponent implements OnInit {
  myForm: FormGroup;
  bus_No;
  selected_bus;
  selected_bus_name;
  selectedState: { [key: string]: boolean } = {};
  selectedArray: string[] = [];
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private busSer: BusesService
  ) {
    this.route.paramMap.subscribe((params) => {
      const busNo = params.get('Bus_No');
      this.bus_No = busNo;
      console.log(busNo);
      if (busNo === '456') {
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
            this.selected_bus = res;
            console.log(this.selected_bus);
          });

        this.http
          .get(
            'https://sample-eb12c-default-rtdb.asia-southeast1.firebasedatabase.app/BUS[0].json'
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
            this.selected_bus_name = res;
            console.log(this.selected_bus_name);
          });
      }
      if (busNo == '789') {
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
            this.selected_bus = res;
            console.log(this.selected_bus);
          });

        this.http
          .get(
            'https://sample-eb12c-default-rtdb.asia-southeast1.firebasedatabase.app/BUS[1].json'
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
            this.selected_bus_name = res;
            console.log(this.selected_bus_name);
          });
      }
      if (busNo == '985') {
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
            this.selected_bus = res;
            console.log(this.selected_bus);
          });
      }

      this.http
        .get(
          'https://sample-eb12c-default-rtdb.asia-southeast1.firebasedatabase.app/BUS[2].json'
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
          this.selected_bus_name = res;
          console.log(this.selected_bus_name);
        });
    });
    // Initialize checkbox states for each checkbox
    const checkboxNames = [
      'S1',
      'S2',
      'S3',
      'S4',
      'S5',
      'S6',
      'S7',
      'S8',
      'S9',
      'S10',
      'S11',
      'S12',
      'SLL-1',
      'SLL-2',
      'SLL-3',
      'SLL-4',
      'SLU-1',
      'SLU-2',
      'SLU-3',
      'SLU-4',
      'SLU-5',
      'SLU-6',
      'SLU-7',
      'SLU-8',
      'SLU-9',
      'SLU-10',
      'SLU-11',
      'SLU-12',
    ];

    checkboxNames.forEach((name) => {
      this.selectedState[name] = false;
    });
  }
  selectedItems: string[] = [];
  select: any[] = [];
  Cost: number = 0;
  select_id: any[] = [];
  isSelected(seatNo: string, type: string, selected: object) {
    // Toggle the state of the clicked checkbox
    this.selectedState[seatNo] = !this.selectedState[seatNo];

    if (this.selectedState[seatNo]) {
      // Find the seat in the array
      const selectedSeat = this.selected_bus[7];

      if (seatNo === 'S8' && selectedSeat && selectedSeat.Gender === 'female') {
        alert('Only females are allowed to book');
      }

      this.selectedItems.push(seatNo);
      this.select.push(selected);
    } else {
      this.selectedItems = this.selectedItems.filter((item) => item !== seatNo);
    }

    if (type === 'seater') this.Cost = this.Cost + 700;
    if (type === 'sleeper_lower') this.Cost = this.Cost + 1200;
    if (type === 'sleeper_upper') this.Cost = this.Cost + 1100;
    console.log('OBJECT:', this.select);
    console.log(this.selectedItems, this.Cost);
  }

  canBook = false;
  displaySelectedItems() {
    if (this.selectedItems.length <= 5) {
      this.canBook = true;
    } else {
      alert('a person can select a maximum of 5 seats only');
    }
    console.log('Selected Items:', this.selectedItems);
  }
  formValues: FormGroup[] = [];
  duplicate_array: any[] = [];
  onSubmit(form: FormGroup) {
    if (form.valid) {
      const seatDataArray = this.formValues.map((seatForm) => seatForm.value);
      this.duplicate_array.push(seatDataArray);
    }
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/^[a-zA-Z\s]*$/), // Allow only letters and spaces
        ],
      ],
      gender: ['', Validators.required],
      age: [
        '',
        [
          Validators.required,
          Validators.min(5),
          Validators.max(99),
          Validators.pattern('^[0-9]*$'), // Only allow numeric values
        ],
      ],
    });
    this.formValues.push(this.myForm);
  }
  isFemaleBooked(seat: any): boolean {
    // Assuming you have a 'Gender' property in your seat object
    return seat.Gender === 'female' && seat.Booked_status;
  }
  book() {
    console.log(this.duplicate_array);
    this.busSer.sendata(
      this.duplicate_array,
      this.selectedItems,
      this.bus_No,
      this.select
    );
    this.router.navigate(['book']);
  }
}
