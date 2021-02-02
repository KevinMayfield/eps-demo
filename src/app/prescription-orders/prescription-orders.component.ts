import { Component, OnInit } from '@angular/core';
import {ITdDataTableColumn} from "@covalent/core/data-table";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-prescription-orders',
  templateUrl: './prescription-orders.component.html',
  styleUrls: ['./prescription-orders.component.scss']
})
export class PrescriptionOrdersComponent implements OnInit {

  basicMarkdown: string = `

   *This is a list of tasks that EPS believes my 'pharmacy' is doing.*
   
   Would expect this to be a call [Prescription Tracker API](https://digital.nhs.uk/services/electronic-prescription-service/guidance-for-developers/guidance-for-developers-ideas-for-using-the-prescription-tracker-api)
   
   As FHIR this would be 
   
   - **GET /Task?owner={ODSCode}**
   
   It would make sense to be able to view the detailed prescriptions and also perform actions on them. Suggested action would be to return the Task (aka Prescription) to EPS (**DispenseProposalReturn**).
   
 `;

    displayedColumns: string[] = ['status','first_name', 'last_name', 'nhs_number', 'order_number', 'return_order', 'view_order'];

    dataSource;
    data: any[] =  [
      {
          'first_name' : 'Nick',
          'last_name' : 'Fury',
          'nhs_number' : '9876543210',
          'order_number': '123453-ABCDFE-12345',
          'status' : 'in-progress'
      },
        {
            'first_name' : 'Scarlett',
            'last_name' : 'Johansson',
            'nhs_number' : '9382109754',
            'order_number': '453123-ABCDFE-34512',
            'status' : 'accepted'
        }
        ,
        {
            'first_name' : 'Maria',
            'last_name' : 'Hill',
            'nhs_number' : '9382197654',
            'order_number': '783123-ABCDFE-32212',
            'status' : 'requested'
        }
  ]

  constructor() { }

  ngOnInit(): void {
     this.dataSource = new MatTableDataSource <any>(this.data);
  }

}
