import { Component, OnInit } from '@angular/core';

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
   
   - **GET /Task?for={NHSNumber}**
   - **GET /Task?group-identifier={prescription-short-form-id}**
   
   It would make sense to be able to be able to **accept** the task. This accept is equivalent to **PatientPrescriptionReleaseRequest**
 `;
  constructor() { }

  ngOnInit(): void {
  }

}
