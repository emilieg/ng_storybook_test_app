import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() data = {data:
	  						       [ [1,'Neely', 'Berkeley','nberkeley0@shutterfly.com','Female','177.30.233.163'],							 
							         [2,'Gaultiero', 'Hintze','ghintze1@altervista.org','Male','71.246.136.182'],							 
							         [3,'Kerry', 'Dewhurst','kdewhurst2@patch.com','Male','234.176.216.140'] ],
      						headers: ['id','first_name','last_name','email','gender','ip_address']
      						};
  
  public tableData = this.data.data;          

  public headers = this.data.headers;					



}
