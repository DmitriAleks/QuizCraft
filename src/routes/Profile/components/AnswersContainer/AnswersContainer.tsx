//@ts-ignore
import style from "../AnswersContainer/AnswersContainer.module.scss";
import {Checkbox} from "../../../../components/Checkbox/Checkbox";
import {Input} from "../../../../components/Input/Input";
import {answersType} from "../../../../types/test-type";

type AnswersContainerType = {
    isSameAnswer: boolean
    setIsSameAnswer: (val: boolean) => void
    answers: answersType[]
    setAnswers:(answers: answersType[]) => void
}


export const AnswersContainer = ({isSameAnswer,setIsSameAnswer, answers, setAnswers }: AnswersContainerType) => {
    return (
        <div className={style.block}>
            <Checkbox checked={isSameAnswer} onChange={setIsSameAnswer}/>
            <div>
                {answers.map((item, index) => {
                    return (
                        <Input
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
    )
}