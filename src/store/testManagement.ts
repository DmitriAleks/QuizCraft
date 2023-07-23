import {testType} from "../types/test-type";
import {makeAutoObservable} from "mobx";
import axios from "axios";

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



    saveTest(test:testType) {
        axios.post('/test/save', {
            ...test
        }).then((response) => {
            console.log(response)
        }).catch(err => {
            console.log(err)
        })
    }

    clearTest() {
        this.questions = initTest
    }


}


export default new TestManagement()