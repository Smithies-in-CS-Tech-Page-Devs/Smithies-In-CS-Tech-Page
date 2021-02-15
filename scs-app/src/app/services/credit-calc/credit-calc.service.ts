import { CourseDataType } from 'src/app/fulfill-major/course-data-type';
import { HardCodedCourses } from 'src/app/fulfill-major/hardcoded-courses';

export class CreditCalcService {

  /*
   * Possible values for the 'fulfills' property:
   *
   * introCS - Intro to CS
   * introAdd - additional 100-level CSC or SDS
   * coreData - Data Structures
   * coreMicro - Microprocessors
   * coreTheory - Theoretical Foundations
   * mathCore - Calc or Logic
   * mathDiscrete - Discrete Math
   * interTheory - intermediate CSC or SDS Theory
   * interProgramming - intermediate CSC or SDS Programming
   * interSystems - intermediate CSC or SDS Systems
   * interAdd - additional 200-level CSC or MTH
   * seminar - 300-level CSC
   */

  // TODO currently hardcoded and incomplete
  private courseList: CourseDataType[] = HardCodedCourses

  constructor() { }

  getCourselist() {
    return this.courseList;
  }
}