import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-attribute-table',
  templateUrl: './attribute-table.component.html',
  styleUrls: ['./attribute-table.component.css']
})
export class AttributeTableComponent implements OnInit {
  @Input() values;
  @Input() headline;
  @Input() dataColumns;
  @Output() onAttributeIncrement = new EventEmitter<number>();
  @Output() onAttributeDecrement = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

}
