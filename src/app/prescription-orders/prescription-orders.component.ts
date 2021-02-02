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

   This would would be a list of prescription orders based on ODS code.
   
   Would expect this to cal [Prescription Tracker API](https://digital.nhs.uk/services/electronic-prescription-service/guidance-for-developers/guidance-for-developers-ideas-for-using-the-prescription-tracker-api)
   
   As FHIR this would be 
   
   - **GET /Task?owner={ODSCode}**
   
   It would make sense to be able to view the detailed prescriptions.
 `;

    displayedColumns: string[] = ['first_name', 'last_name', 'nhs_number', 'order_number', 'return_order', 'view_order'];

    dataSource;
    data: any[] =  [
      {
          'first_name' : 'bob',
          'last_name' : 'builder',
          'nhs_number' : '9876543210',
          'order_number': '123453-ABCDFE-12345'
      }
  ]

  constructor() { }

  ngOnInit(): void {
     this.dataSource = new MatTableDataSource <any>(this.data);
  }

}
