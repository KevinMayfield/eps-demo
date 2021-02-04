import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-prescription-search',
  templateUrl: './prescription-search.component.html',
  styleUrls: ['./prescription-search.component.scss']
})
export class PrescriptionSearchComponent implements OnInit {

  basicMarkdown: string = `

   This give the user ability to search for prescriptions, this would focus around the patient.
   
   Would expect this to cal [Prescription Tracker API](https://digital.nhs.uk/services/electronic-prescription-service/guidance-for-developers/guidance-for-developers-ideas-for-using-the-prescription-tracker-api)
   
   The searches would be on prescription token and NHS Number
   
   - **GET /Task?for.identifier={NHSNumber}**
   - **GET /Task?group-identifier={prescription-short-form-id}**
   
   It would make sense to be able to be able to **accept** the task. This accept is equivalent to **PatientPrescriptionReleaseRequest**
 `;

    displayedColumns: string[] = ['status','pharmacy','first_name', 'last_name', 'nhs_number', 'order_number',  'accept_order', 'view_order'];

    dataSource;
    data: any[] =  [
        {
            'first_name' : 'Nick',
            'last_name' : 'Fury',
            'nhs_number' : '9876543210',
            'order_number': '7654321-ABCDFE-12345',
            'pharmacy' : 'VNE51',
            'status' : 'accepted'
        },
        {
            'first_name' : 'Wanda',
            'last_name' : 'Maximoff',
            'nhs_number' : '9765483210',
            'order_number': '5437621-ABCDFE-543125',
            'status' : 'requested'
        }
    ]

    constructor() { }

  ngOnInit(): void {
      this.dataSource = new MatTableDataSource <any>(this.data);
  }

}
