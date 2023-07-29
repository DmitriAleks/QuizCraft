//@ts-ignore
import style from './TestEditor.module.scss'
import {useEffect, useState} from "react";
import {TestsList} from "../TestsList/TestsList";
import {Textarea} from "../../../../components/Textarea/Textarea";
import {questionType, answersType} from "../../../../types/test-type";
import {AnswersContainer} from "../AnswersContainer/AnswersContainer";
import { getInitArrayAnswers} from "../../../../utils/commonFunction";


type TestEditorPropsType = {
    questions: questionType[]
    setQuestions: (val: questionType[]) => void
    handleDeleteQuestion: (questNum: string) => void

}



export const TestEditor = (props: TestEditorPropsType) => {
    const {questions, setQuestions, handleDeleteQuestion} = props
    const [isSameAnswer, setIsSameAnswer] = useState<boolean>(true)
    const [selectedQuest, setSelectedQuest] = useState('1')
    const [question, setQuestion] = useState<string>(questions.find(it => it.questionNumber === selectedQuest)?.question || '')
    const [answers, setAnswers] = useState<answersType[]>(getInitArrayAnswers())

    useEffect(() => {
        const answersT = questions.find(it => it.questionNumber === selectedQuest)?.answers
        setQuestion(questions.find(it => it.questionNumber === selectedQuest)?.question || '')
        answersT && setAnswers(answersT)
    }, [selectedQuest])

    const handleAddQuestion = () => {
        if (!question || !answers.filter(it => it.answer).length) return

        const isHaveQuest = questions.some(it => it.questionNumber === selectedQuest)

        if (isHaveQuest) {
            setQuestions(questions.map(it => it.questionNumber === selectedQuest ? {...it, question, answers} : it))
        } else {
            setQuestions([...questions, {
                question: question,
                id: questions.length.toString(),
                answers: answers.filter(it => it.answer),
                questionNumber: (questions.length + 1).toString(),
            }])
        }

        if (!isSameAnswer) setAnswers(getInitArrayAnswers())
        setQuestion('')
        setSelectedQuest('none')
    }


    return (
        <div className={style.block}>
            <div className={style.questions_block}>
                <Textarea value={question} onChange={setQuestion}/>
                <button onClick={() => {
                    handleAddQuestion()
                }}>
                    {questions.find(it => it.questionNumber === selectedQuest)?.question ? 'Сохранить' : 'Добавить'}
                </button>
            </div>
            <AnswersContainer answers={answers} setAnswers={setAnswers} isSameAnswer={isSameAnswer}
                              setIsSameAnswer={setIsSameAnswer}/>
            <div>
                {!!questions.filter(it => it.question).length &&
                    <TestsList questions={questions} setSelectedQuest={setSelectedQuest}
                               handleDeleteQuestion={handleDeleteQuestion}/>}
            </div>
        </div>
    )
}