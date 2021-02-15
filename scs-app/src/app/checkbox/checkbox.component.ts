import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html'
})

export class CheckboxComponent implements OnInit {
  @Input() isChecked: boolean = false;
  constructor() {}
  ngOnInit() {}
}