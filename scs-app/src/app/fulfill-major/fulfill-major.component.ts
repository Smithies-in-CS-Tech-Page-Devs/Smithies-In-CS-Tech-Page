import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { CreditCalcService } from '../services/credit-calc/credit-calc.service';
import { CourseDataType } from './course-data-type';
import { CheckboxComponent } from '../checkbox/checkbox.component';

@Component({
  selector: 'fulfill-major',
  templateUrl: './fulfill-major.component.html',
  styleUrls: ['./fulfill-major.component.scss'],
  providers: [ CreditCalcService ]
})

export class FulfillMajorComponent implements OnInit {

  private courseList: CourseDataType[] = [];
  public userCourses: CourseDataType[] = [];

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
        : this.courseList.filter((course: any) => `${course.dept}${course.id} - ${course.name}`.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  formatter = (x: CourseDataType) => `${x.dept}${x.id} ${x.name}`;

  addCourse(e: any, input: any) {
    e.preventDefault();
    this.userCourses.push(e.item);
    input.value = '';
  }

}