//@ts-ignore
import style from './TestEditor.module.scss'
import {useEffect, useState} from "react";
import {TestsList} from "../TestsList/TestsList";

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
    const [valueInput, setValueInput] = useState<string>('')
    const [questions, setQuestions] = useState<questionType[]>([])
    const [answers, setAnswers] = useState<answersType[]>([{
        answer: '',
        id: Math.random().toString()
    }])
    const [isSameAnswer, setIsSameAnswer] = useState<boolean>(false)

    useEffect(() => {
        console.log(questions)
    }, [questions])


    return (
        <div className={style.block}>
            <div className={style.questions_block}>
              <textarea className={style.textarea}
                  placeholder="Введите вопрос"
                        value={valueInput}
                        onChange={(e) => {
                  setValueInput(e.currentTarget.value)
              }}>
              </textarea>
                <button onClick={() => {
                    setQuestions([...questions, {
                        question: valueInput,
                        id: questions.length.toString(),
                        answers: answers.filter(it=> it.answer),
                        questionNumber: (questions.length + 1).toString(),
                    }])
                    setValueInput('')
                }}>
                    Добавить вопрос
                </button>
            </div>
            <div className={style.answers_block}>
                <div>
                    <label>Повторять ответы?</label>
                    <input type="checkbox"
                           //value={isSameAnswer}
                           onChange={(e)=>{
                               console.log(e.currentTarget)
                      //  setIsSameAnswer(e)
                    }}/>
                </div>
                <div>
                    {answers.map((item, index) => {
                        return (
                            <div key={item.id}>
                                <label>{`Ответ ${index + 1}`}</label>
                                <input type="text" value={item.answer} onChange={(e) => {
                                    setAnswers(answers.map((it, idx) => {
                                        return index === idx ? {...it, answer: e.currentTarget.value} : it
                                    }))
                                }}
                                       onBlur={(e) => {
                                           e.currentTarget.value && answers.length === index + 1 && setAnswers([...answers, {
                                               answer: '',
                                               id: Math.random().toString()
                                           }])
                                       }}
                                />
                            </div>
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