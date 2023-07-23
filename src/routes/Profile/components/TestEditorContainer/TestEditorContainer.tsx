import {TestEditor} from "../TestEditor/TestEditor";
import {Modal} from "../../../../components/Modal/Modal";
import {useEffect, useState} from "react";
import {useStores} from "../../../../store/root-store-context";
import {answersType} from "../../../../types/test-type";

type TestEditorContainerPropsType = {
    isShowModal: boolean
    setIsShowModal: (val: boolean)=> void
}



export const TestEditorContainer = (props: TestEditorContainerPropsType) => {
    const {isShowModal, setIsShowModal} = props
    const {testManagement} = useStores()
    const [question, setQuestion] = useState<string>('')
    const [questions, setQuestions] = useState<any>(testManagement.getInitTest().questions)
    const [answers, setAnswers] = useState<answersType[]>([{
        answer: '',
        id: Math.random().toString()
    }])



    return <Modal title='Создание теста'
                  isShowModal={isShowModal}
                  onOk={() => {
                      testManagement.saveTest({
                          title: 'New test',
                          testId: Math.random().toString(),
                          questions
                      })
                  }}
                  onCancel={() => {
                     setIsShowModal(false)
                  }}
                  children={<TestEditor
                      answers={answers}
                      setAnswers={setAnswers}
                      questions={questions}
                      setQuestions={setQuestions}
                      question={question}
                      setQuestion={setQuestion}
                  />}
    />
}