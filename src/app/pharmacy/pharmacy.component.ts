import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.scss']
})
export class PharmacyComponent implements OnInit {

  basicMarkdown: string = `This is using [EPS Directory of Service API](https://nhsconnect.github.io/eps-dos-api/index.html)
  
  SDS offers a slimed down version which may be suitable for some queries, EPS DOS is based on SDS and NHS Choices data.
  
  This is meant to be for prescribers only but can see reasons why dispensers may also search.`;

  displayedColumns: string[] = ['name', 'ods', 'service_type', 'postcode', 'phone'];

  dataSource;
  data = [{
    "ods": "FJ679",
    "name": "Boots",
    "service_type": "eps_pharmacy",
    "address": {
      "line": ["Unit 2 Western Ticket  Hall", "Kings Cross London Underground", "London", "Middlesex"],
      "postcode": "N1C 4AL"
    },
    "patient_contact": {
      "tel": "0207 713 9519",
      "web_address": "http://www.boots.com/"
    },
    "prescriber_contact": {
      "tel": "0207 713 9519",
      "fax": "0208 713 6883"
    },
    "location": {
      "easting": 530111.0,
      "northing": 182950.0
    },
    "opening": {
      "open_247": false,
      "wed": [{
        "open": "07:30",
        "close": "21:30"
      }],
      "thu": [{
        "open": "07:30",
        "close": "21:30"
      }]
    },
    "distance": 0.0
  }, {
    "ods": "FE513",
    "name": "Boots",
    "service_type": "eps_pharmacy",
    "address": {
      "line": ["Euston Rd", "", "London", "Middlesex"],
      "postcode": "N1C 4QL"
    },
    "patient_contact": {
      "tel": "0207 833 0216",
      "web_address": "http://www.boots.com/"
    },
    "prescriber_contact": {
      "tel": "",
      "fax": ""
    },
    "location": {
      "easting": 530076.0,
      "northing": 183055.0
    },
    "opening": {
      "open_247": false,
      "wed": [{
        "open": "07:00",
        "close": "23:59"
      }],
      "thu": [{
        "open": "07:00",
        "close": "23:59"
      }]
    }
  }];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource <any>(this.data);
  }

}
