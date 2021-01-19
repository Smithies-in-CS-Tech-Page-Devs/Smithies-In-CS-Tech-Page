export class CreditCalcService {

  private courselist: {course_name: string, fulfills: string}[] = [
    {'course_name': 'CSC 212 - Programming with Data Structures', fulfills: 'core_data'},
    {'course_name': 'CSC 231 - Microprocessors and Assembly Language', fulfills: 'core_micro'},
    {'course_name': 'CSC 250 - Theoretical Foundations of Computer Science', fulfills: 'core_theory'},
    {'course_name': 'MTH 153 - Discrete Math', fulfills: 'math_core'},
    {'course_name': 'LOG 100 - Valid and Invalid Reasoning', fulfills: 'math_discrete'},
    {'course_name': 'CSC 372 - Internet Censorship', fulfills: 'seminar'},
  ]

  constructor() { }

  getCourselist() {
    return this.courselist;
  }
}