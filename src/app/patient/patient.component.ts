import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  basicMarkdown: string = `This is using [PDS API](https://digital.nhs.uk/developer/api-catalogue/personal-demographics-service-fhir)
  
  `;

  displayedColumns: string[] = ['first_name', 'last_name', 'nhs_number', 'pharmacy', 'dispensing_doctor', 'medical_appliance','view_tasks', 'view_repeats', 'update_pharmacy'];

  dataSource;
  data: any[] =  [
    {
      'first_name' : 'Nick',
      'last_name' : 'Fury',
      'nhs_number' : '9876543210',
      'medical_appliance': 'VNE51',
      'pharmacy' : 'VNE51',
      'dispensing_doctor' : 'VNE51'
    },
    {
      'first_name' : 'Wanda',
      'last_name' : 'Maximoff',
      'nhs_number' : '9765483210',
      'medical_appliance': 'ANE52',
      'pharmacy' : 'PH1',
      'dispensing_doctor' : 'PH1'
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource <any>(this.data);
  }

}
