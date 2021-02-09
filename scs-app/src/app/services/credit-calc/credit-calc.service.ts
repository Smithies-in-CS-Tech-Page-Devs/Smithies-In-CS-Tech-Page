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
  private courseList: {courseName: string, fulfills: string}[] = [
    {'courseName': 'CSC 212 - Programming with Data Structures', fulfills: 'coreData'},
    {'courseName': 'CSC 231 - Microprocessors and Assembly Language', fulfills: 'coreMicro'},
    {'courseName': 'CSC 250 - Theoretical Foundations of Computer Science', fulfills: 'coreTheory'},
    {'courseName': 'MTH 153 - Discrete Math', fulfills: 'mathCore'},
    {'courseName': 'LOG 100 - Valid and Invalid Reasoning', fulfills: 'mathDiscrete'},
    {'courseName': 'CSC 372 - Internet Censorship', fulfills: 'seminar'},
  ]

  constructor() { }

  getCourselist() {
    return this.courseList;
  }
}