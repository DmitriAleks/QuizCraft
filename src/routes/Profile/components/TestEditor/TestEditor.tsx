//@ts-ignore
import style from './TestEditor.module.scss'
import {useEffect, useState} from "react";
import {TestsList} from "../TestsList/TestsList";
import {Checkbox} from "../../../../components/Checkbox/Checkbox";
import {Textarea} from "../../../../components/Textarea/Textarea";
import {Input} from "../../../../components/Input/Input";

type answersType = {
    answer: string,
    id: string
}

export type questionType = {
    questionNumber: string
    question: string,
    id: string,
    answers: answersType[]
}

export const TestEditor = () => {
    const [question, setQuestion] = useState<string>('')
    const [questions, setQuestions] = useState<questionType[]>([])
    const [answers, setAnswers] = useState<answersType[]>([{
        answer: '',
        id: Math.random().toString()
    }])
    const [isSameAnswer, setIsSameAnswer] = useState<boolean>(true)

    return (
        <div className={style.block}>
            <div className={style.questions_block}>
                <Textarea value={question} onChange={setQuestion}/>
                <button onClick={() => {
                    if(!question && answers.filter(it=> it.answer).length) return
                    setQuestions([...questions, {
                        question: question,
                        id: questions.length.toString(),
                        answers: answers.filter(it => it.answer),
                        questionNumber: (questions.length + 1).toString(),
                    }])
                    setQuestion('')
                    if (!isSameAnswer) setAnswers([{
                        answer: '',
                        id: Math.random().toString()
                    }])
                }}>
                    Добавить вопрос
                </button>
            </div>
            <div className={style.answers_block}>
                <Checkbox checked={isSameAnswer} onChange={setIsSameAnswer}/>
                <div>
                    {answers.map((item, index) => {
                        return (
                            <Input key={item.id}
                                   value={item.answer}
                                   label={`Ответ ${index + 1}`}
                                   onChange={(val) => {
                                       setAnswers(answers.map((it, idx) => {
                                           return index === idx ? {...it, answer: val} : it
                                       }))
                                   }}
                                   onBlur={(val) => {
                                       val && answers.length === index + 1 && setAnswers([...answers, {
                                           answer: '',
                                           id: Math.random().toString()
                                       }])
                                   }}
                            />
                        )
                    })}
                </div>
            </div>
            <div>
                <TestsList questions={questions}/>
            </div>
        </div>
    )
}