import {TestEditor} from "../TestEditor/TestEditor";
import {Modal} from "../../../../components/Modal/Modal";
import {useEffect, useState} from "react";
import {useStores} from "../../../../store/root-store-context";
import {answersType, questionType} from "../../../../types/test-type";

type TestEditorContainerPropsType = {
    isShowModal: boolean
    setIsShowModal: (val: boolean)=> void
}



export const TestEditorContainer = (props: TestEditorContainerPropsType) => {
    const {isShowModal, setIsShowModal} = props
    const {testManagement} = useStores()

    const [questions, setQuestions] = useState<questionType[]>(testManagement.getInitTest().questions)


    const handleDeleteQuestion = (questNum: string) => {
        const filteredArr = questions.filter(it => it.questionNumber !== questNum)
        setQuestions(filteredArr.map((it ,idx) => ({
            ...it, questionNumber: (idx + 1).toString()
        })))
    }


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
                      questions={questions}
                      setQuestions={setQuestions}
                      handleDeleteQuestion={handleDeleteQuestion}
                  />}
    />
}