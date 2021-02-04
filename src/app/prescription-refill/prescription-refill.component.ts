import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-prescription-refill',
  templateUrl: './prescription-refill.component.html',
  styleUrls: ['./prescription-refill.component.scss']
})
export class PrescriptionRefillComponent implements OnInit {


  basicMarkdown: string = `

   ### GP Gap Work
 
   This would be a list of the patients repeat medications. This is currently sent within the prescription order as a string (in FHIR List). Some pharmacies have replaced this with a query API using IM1, this suggestion uses GP Connect.   
   
   The data should be sourced via GP Connect [Medications API](https://developer.nhs.uk/apis/gpconnect-1-2-7/accessrecord_structured_development_retrieve_patient_record.html). 
   This is the wrong version of FHIR and the API uses RPC style interface, not FHIR RESTful which is strongly recommended.
   
   As FHIR RESTful this would be
   
   - **GET /MedicationRequest?patient.identifier={nhsNumber}&status=active&course=continuous**
   
   From this list it would make sense to be able to reorder the medications (this is only possible via IM1 interfaces), this is suboptimal and proabably should be a FHIR ServiceRequest.
 `;
    displayedColumns: string[] = ['concept', 'name', 'quantity', 'unit','reorder_medication'];

    dataSource;

    data: any[] =  [
        {
            'concept' : '322237000',
            'name' : 'Paracetamol 500mg soluble tablets',
            'quantity' : '100',
            'unit' : 'tablet'
        },
        {
            'concept' : '35936511000001108',
            'name' : 'Salbutamol 100micrograms/dose inhaler',
            'quantity' : '200',
            'unit' : 'dose'
        }
    ]


  constructor() { }

  ngOnInit(): void {
      this.dataSource = new MatTableDataSource <any>(this.data);
  }

}
