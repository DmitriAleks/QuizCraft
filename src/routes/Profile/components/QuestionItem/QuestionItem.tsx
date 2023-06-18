//@ts-ignore
import style from './QuestionItem.module.scss';
import {questionType} from "../TestEditor/TestEditor";

export const QuestionItem = ({ question, questionNumber, answers}:questionType) => {
    return(
        <div>
            <span>{`№${questionNumber}`}</span>
            <span>{question}</span>

        </div>
    )
}