import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { CreditCalcService } from '../services/credit-calc/credit-calc.service';

@Component({
  selector: 'fulfill-major',
  templateUrl: './fulfill-major.component.html',
  styleUrls: ['./fulfill-major.component.scss'],
  providers: [ CreditCalcService ]
})
export class FulfillMajorComponent implements OnInit {

  private courseList: {courseName: string, fulfills: string}[] = [];
  public userCourses: {courseName: string, fulfills: string}[] = [];

  constructor(private creditCalcService: CreditCalcService) { }

  ngOnInit() {
    this.courseList = this.creditCalcService.getCourselist();
  }

  /* See ng-bootstrap docs for implementation of the typeahead search bar below:
   * https://ng-bootstrap.github.io/#/components/typeahead/examples
   */
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term: any) => term === '' ? []
        : this.courseList.filter((course: any) => course.courseName.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  formatter = (x: {courseName: string}) => x.courseName;

  addCourse(e: any, input: any) {
    e.preventDefault();
    this.userCourses.push(e.item);
    input.value = '';
  }

}