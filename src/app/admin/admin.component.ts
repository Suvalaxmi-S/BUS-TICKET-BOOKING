import { Component, OnInit, ViewChild } from '@angular/core';
import { BusesService } from '../services/buses.service';
import { HttpClient } from '@angular/common/http';
import { pipe, map } from 'rxjs';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  email: string = '';
  password: string = '';
  loginForm: FormGroup;
  BUS1: any[] = [];
  BUS2: any[] = [];
  BUS3: any[] = [];
  formValues: any[] = [];
  selected_seats: any[] = [];
  bus_No;
  canView: boolean = false;
  result;
  constructor(
    private busSer: BusesService,
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
          ),
        ],
      ],
    });
    this.selected_seats = this.busSer.getSeat();
    this.bus_No = this.busSer.getBus_No();
    this.formValues = this.busSer.getdata();
    console.log(this.selected_seats, this.bus_No, this.formValues);
  }
  view_details() {}

  login() {
    if (this.email === 'admin@gmail.com' && this.password === 'Admin@123') {
      this.router.navigate(['/admin/admindetails']);
    } else {
      alert('Please enter valid email and password');
    }
  }
}
