//@ts-ignore
import style from './TestsList.module.scss';
import {QuestionItem} from "../QuestionItem/QuestionItem";
import {questionType} from "../../../../types/test-type";


type TestListPropsType = {
    questions: questionType[]
    setSelectedQuest: (sel: string) => void
    handleDeleteQuestion: (questNum: string) => void
}

export const TestsList = ({questions, setSelectedQuest, handleDeleteQuestion}: TestListPropsType) => {
    return (
        <div className={style.block}>
            {questions.map(item => {
                return <QuestionItem
                    key={item.id}
                    questionNumber={item.questionNumber}
                    question={item.question}
                    id={item.id}
                    answers={item.answers}
                    setSelectedQuest={setSelectedQuest}
                    handleDeleteQuestion={handleDeleteQuestion}
                />
            })
            }
        </div>

    )
}