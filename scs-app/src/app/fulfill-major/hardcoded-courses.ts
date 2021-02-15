import { CourseDataType } from './course-data-type';

export const HardCodedCourses : CourseDataType[]  = [
    { 
        dept: 'CSC',
        id: 111, 
        name: 'Introduction to Computer Science Through Programming', 
        grade: "",
        courseReqAndArea: {
            isIntro: true,
            isTheory: false,
            isProgramming: false,
            isSystems: false,
            isMath: false,
            isSeminar: false,
            credits: 5,
        }
    },
    {   
        dept: 'CSC',
        id: 212, 
        name: 'Programming with Data Structures', 
        grade: "",
        courseReqAndArea: {
            isIntro: false,
            isTheory: false,
            isProgramming: true,
            isSystems: false,
            isMath: false,
            isSeminar: false,
            credits: 5,
        }
    },
    {   dept: 'CSC',
        id: 231,  
        grade: "",
        name: "Microprocessors and Assembly Language",
        courseReqAndArea: {
            isIntro: false,
            isTheory: false,
            isProgramming: true,
            isSystems: false,
            isMath: false,
            isSeminar: false,
            credits: 5,
        }
    },
    { 
        dept: 'CSC',
        id: 250,  
        grade: "",
        name: "Theoretical Foundations of Computer Science",
        courseReqAndArea: {
            isIntro: false,
            isTheory: true,
            isProgramming: true,
            isSystems: false,
            isMath: false,
            isSeminar: false,
            credits: 5,
        }
    },
    { 
        dept: 'MTH',
        id: 153,  
        grade: "",
        name: "Intro to Discrete Math",
        courseReqAndArea: {
            isIntro: false,
            isTheory: true,
            isProgramming: false,
            isSystems: false,
            isMath: false,
            isSeminar: false,
            credits: 5,
        }
    },
    { 
        dept: 'LOG',
        id: 100,  
        grade: "",
        name: "Valid and Invalid Reasoning",
        courseReqAndArea: {
            isIntro: false,
            isTheory: true,
            isProgramming: false,
            isSystems: false,
            isMath: false,
            isSeminar: false,
            credits: 5,
        }
    },
    { 
        dept: 'CSC',
        id: 390,  
        grade: "",
        name: "Seminar in Artificial Intelligence Natural Language Understanding",
        courseReqAndArea: {
            isIntro: false,
            isTheory: true,
            isProgramming: false,
            isSystems: false,
            isMath: false,
            isSeminar: false,
            credits: 5,
        }
    }
]