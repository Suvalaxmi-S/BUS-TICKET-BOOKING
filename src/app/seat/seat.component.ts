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
  global = null;

  isSelected(seatNo: string, type: string, selected: object) {
    this.selectedState[seatNo] = !this.selectedState[seatNo];

    if (this.selectedState[seatNo]) {
      this.selectedItems.push(seatNo);
      this.select.push(selected);
    } else {
      this.selectedItems = this.selectedItems.filter((item) => item !== seatNo);
    }

    if (type === 'seater') this.Cost = this.Cost + 700;
    if (type === 'sleeper_lower') this.Cost = this.Cost + 1200;
    if (type === 'sleeper_upper') this.Cost = this.Cost + 1100;

    console.log('OBJECT_MAIN:', this.select);
    console.log(this.selectedItems, this.Cost);
  }

  canBook = false;
  displaySelectedItems() {
    if (this.selectedItems.length <= 5) {
      this.canBook = true;
      this.router.navigate(['bookingform']);
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
      alert('Values added successfully');
    }
  }
  female_color = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];
  Array1 = [
    'S1',
    'S2',
    'S3',
    'S4',
    'S5',
    'S6',
    'SLU-1',
    'SLU-2',
    'SLU-3',
    'SLU-4',
  ];
  Array2 = [
    'S7',
    'S8',
    'S9',
    'S10',
    'S11',
    'S12',
    'SLU-5',
    'SLU-6',
    'SLU-7',
    'SLU-8',
  ];

  female() {
    for (let i in this.Array1) {
      for (let k in this.selected_bus) {
        if (this.selected_bus[k].Seat_No === this.Array1[i]) {
          if (
            this.selected_bus[k].Booked_status === true &&
            this.selected_bus[k].Gender === 'female'
          ) {
            for (let j in this.selected_bus) {
              if (this.Array2[i] === this.selected_bus[j].Seat_No) {
                if (this.selected_bus[j].Booked_status === false) {
                  this.female_color[j] = true;
                  this.global = j;
                  this.selected_bus[j]['only_female'] = true;
                  console.log('booo', this.selected_bus[j], this.female_color);
                }
              }
            }
          }
        }
      }
    }

    for (let i in this.Array2) {
      for (let k in this.selected_bus) {
        if (this.selected_bus[k].Seat_No === this.Array2[i]) {
          if (
            this.selected_bus[k].Booked_status === true &&
            this.selected_bus[k].Gender === 'female'
          ) {
            for (let j in this.selected_bus) {
              if (this.Array1[i] === this.selected_bus[j].Seat_No) {
                if (this.selected_bus[j].Booked_status === false) {
                  this.female_color[j] = true;
                  this.global = j;
                  this.selected_bus[j]['only_female'] = true;
                  console.log(
                    'booo',
                    this.selected_bus[j],
                    this.female_color,
                    j
                  );
                }
              }
            }
          }
        }
      }
    }
  }
  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/^[a-zA-Z\s]*$/),
        ],
      ],
      gender: ['', Validators.required],
      age: [
        '',
        [
          Validators.required,
          Validators.min(5),
          Validators.max(99),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
    });
    this.formValues.push(this.myForm);
  }
  isFemaleBooked(seat: any): boolean {
    return seat.Gender === 'female' && seat.Booked_status;
  }
  showUpiForm: boolean = false;
  upiId: string = '';
  showSuccessMessage = false;
  book() {
    // console.log(this.duplicate_array);
    // this.busSer.sendata(
    //   this.duplicate_array,
    //   this.selectedItems,
    //   this.bus_No,
    //   this.select
    // );
    // this.router.navigate(['book']);
    this.showUpiForm = true;
    this.canBook = false;
  }

  submitUpiForm() {
    if (this.validateUpiId(this.upiId)) {
      this.busSer.sendata(
        this.duplicate_array,
        this.selectedItems,
        this.bus_No,
        this.select
      );
      alert('TRANSCATION SUCCESSFULL ✅');
      this.router.navigate(['book']);
    } else {
      alert('TRANSCATION FAILED-INVALID UPI ID ❌');
    }

    this.showUpiForm = false;
  }
  private validateUpiId(upiId: string): boolean {
    const savedUpiId = 'suva@oksbi';
    return upiId === savedUpiId;
  }
}
