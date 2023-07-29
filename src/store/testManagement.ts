import {testType} from "../types/test-type";
import {makeAutoObservable} from "mobx";
import axios from "axios";
import {getInitArrayAnswers} from "../utils/commonFunction";

const initTest: testType = {
    title: 'New test',
    testId: Math.random().toString(),
    questions: [{
        questionNumber: '1',
        question: '',
        id: Math.random().toString(),
        answers: getInitArrayAnswers()
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