import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() text = '';
  @Output() onClick = new EventEmitter<any>();
}
