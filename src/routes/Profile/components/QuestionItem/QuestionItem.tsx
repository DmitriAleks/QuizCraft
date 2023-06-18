//@ts-ignore
import style from './QuestionItem.module.scss';
import {questionType} from "../TestEditor/TestEditor";
import {Tooltip} from "../../../../components/Toolpit/Tooltip";

export const QuestionItem = ({ question, questionNumber, answers}:questionType) => {
    const answerTest = answers.map(it => it.answer).join('/')
    return(
        <div className={style.block}>
            <div className={style.number}>{`№${questionNumber}`}</div>
            <div className={style.question}>{question}</div>
            <div className={style.answer}>
                <Tooltip text={answerTest} children={<div>asdd</div>}/>
            </div>
            <div className={style.buttons}>
                <button>изменить</button>
                <button>удалить</button>
            </div>
        </div>
    )
}