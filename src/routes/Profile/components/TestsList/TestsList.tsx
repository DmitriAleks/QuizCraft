//@ts-ignore
import style from './TestsList.module.scss';
import {QuestionItem} from "../QuestionItem/QuestionItem";
import {questionType} from "../../../../types/test-type";


type TestListPropsType = {
    questions: questionType[]
}

export const TestsList = ({questions}: TestListPropsType) => {
    return (
        <div className={style.block}>
            {questions.map(item => {
                return <QuestionItem
                    questionNumber={item.questionNumber}
                    question={item.question}
                    id={item.id}
                    answers={item.answers}/>
            })
            }
        </div>

    )
}