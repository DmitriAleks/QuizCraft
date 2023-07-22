import {answersType, questionType, testType} from "../types/test-type";
import {makeAutoObservable} from "mobx";

const initTest: testType = {
    title: 'New test',
    testId: Math.random().toString(),
    questions: [{
        questionNumber: '1',
        question: '',
        id: Math.random().toString(),
        answers: [{
            answer: '',
            id: Math.random().toString()
        }]
    }]
}

class TestManagement {
    questions: testType = initTest

    constructor() {
        makeAutoObservable(this)
    }

    getInitTest() {
        return this.questions
    }

    getTestsById() {

    }

    addedQuest() {

    }

    removeQuest() {

    }

    addedAnswer() {

    }

    removeAnswer() {

    }

    saveTest() {

    }

    clearTest() {
        this.questions = initTest
    }


}


export default new TestManagement()