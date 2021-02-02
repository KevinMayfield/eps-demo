import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-prescription-order-detail',
  templateUrl: './prescription-order-detail.component.html',
  styleUrls: ['./prescription-order-detail.component.scss']
})
export class PrescriptionOrderDetailComponent implements OnInit {

  basicMarkdown: string = `

   It's not possible to do this at present. 
   
   Based on prescription short form I should be able to retrieve the prescription (ParentPrescription).
   
   As FHIR this would be something like 
   
   - **GET /Bundle?message.group-identifier={prescription-short-form}**
   
   It is similar to **PatientPrescriptionReleaseRequest** without the release action. 
   
   The **prescription-order-update** action is applicable here to cancel individual items.
    
 `;

    displayedColumns: string[] = ['concept', 'name', 'quantity', 'unit', 'cancel_medication'];

    displayedDispenseColumns: string[] = ['prepared','concept', 'name', 'quantity', 'status', 'cancel_dispense'];

    dataSource;
    dispenseDataSource;

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
    dispensedata: any[] =  [
        {
            'prepared' : '2020-06-10T16:30:00+00:00',
            'concept' : '1858411000001101',
            'name' : 'Paracetamol 500mg soluble tablets (Unichem Plc)',
            'quantity' : '60 tablets',
            'status' : '0003 (Partial)'
        },
        {
            'prepared' : '2020-06-10T16:30:00+00:00',
            'concept' : '3416211000001106',
            'name' : 'Salbutamol 100micrograms/dose inhaler (Sandoz Ltd)',
            'quantity' : '200 dose',
            'status' : '0001 (Dispensed)'
        },
        {
            'prepared' : '2020-06-25T15:30:00+00:00',
            'concept' : '915611000001105',
            'name' : 'Paracetamol 500mg soluble tablets (AAH Pharmaceuticals Ltd)',
            'quantity' : '24 tablets',
            'status' : '0003 (Partial)'
        },{
            'prepared' : '2020-06-25T15:30:00+00:00',
            'concept' : '2274211000001101',
            'name': 'Paracetamol 500mg soluble tablets (Kent Pharmaceuticals)',
            'quantity': '16 tablets',
            'status': '0001 (Dispensed)'

                }
                ]

  constructor() { }

  ngOnInit(): void {
      this.dataSource = new MatTableDataSource <any>(this.data);
      this.dispenseDataSource = new MatTableDataSource <any>(this.dispensedata);
  }

}
