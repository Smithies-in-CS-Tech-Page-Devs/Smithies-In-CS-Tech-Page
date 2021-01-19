import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { CreditCalcService } from '../services/credit-calc/credit-calc.service';

@Component({
  selector: 'fulfill-major',
  templateUrl: './fulfill_major.component.html',
  styleUrls: ['./fulfill_major.component.scss'],
  providers: [ CreditCalcService ]
})
export class FulfillMajorComponent implements OnInit {

  private courselist: {course_name: string, fulfills: string}[] = [];
  public model: any;

  constructor(private creditCalcService: CreditCalcService) { }

  ngOnInit() {
    this.courselist = this.creditCalcService.getCourselist();
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term: any) => term === '' ? []
        : this.courselist.filter((course: any) => course.course_name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  formatter = (x: {course_name: string}) => x.course_name;

}