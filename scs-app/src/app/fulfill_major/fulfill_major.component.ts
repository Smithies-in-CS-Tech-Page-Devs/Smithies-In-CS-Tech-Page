import { Component, OnInit } from '@angular/core';
import { CreditCalcService } from '../services/credit-calc/credit-calc.service';

@Component({
  selector: 'fulfill-major',
  templateUrl: './fulfill_major.component.html',
  styleUrls: ['./fulfill_major.component.scss'],
  providers: [ CreditCalcService ]
})
export class FulfillMajorComponent implements OnInit {

  val: number = 0;

  constructor(private creditCalcService: CreditCalcService) { }

  ngOnInit() {
    this.val = this.creditCalcService.testService();
  }

}