//@ts-ignore
import style from './QuestionItem.module.scss';
import {Tooltip} from "../../../../components/Toolpit/Tooltip";
import {questionType} from "../../../../types/test-type";


type QuestionItemPropsType = questionType &  {
    setSelectedQuest: (sel: string) => void
    handleDeleteQuestion: (questNum: string) => void
}

export const QuestionItem = ({ question, questionNumber, answers, setSelectedQuest, handleDeleteQuestion}:QuestionItemPropsType) => {
    const answerTest = answers.map(it => it.answer).join('/')
    return(
        <div className={style.block} onClick={()=>{
            setSelectedQuest(questionNumber)
        }}>
            <div className={style.number}>{`№${questionNumber}`}</div>
            <div className={style.question}>{question}</div>
            <div className={style.answer}>
                <Tooltip text={answerTest} children={<div>Ответы</div>}/>
            </div>
            <div className={style.buttons}>
                <button onClick={(event)=>{
                    event.stopPropagation()
                    handleDeleteQuestion(questionNumber)
                }}>удалить</button>
            </div>
        </div>
    )
}