export type answersType = {
    answer: string,
    id: string
}

export type questionType = {
    questionNumber: string
    question: string,
    id: string,
    answers: answersType[]
}

export type testType = {
    title: string,
    testId: string,
    questions: questionType[]
}