type CourseAreaDesignations = { //Data structure to hold course area designation info 
    isIntro: boolean,
    isTheory: boolean,
    isProgramming: boolean,
    isSystems: boolean,
    isMath: boolean,
    isSeminar: boolean,
    credits: number,
}

export type CourseDataType = {
    dept: string;
    id: number;
    name: string;
    grade: string,
    courseReqAndArea: CourseAreaDesignations;
}