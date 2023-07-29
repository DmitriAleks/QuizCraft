//
// import style from './TestsList.module.scss';
// import {QuestionItem} from "../QuestionItem/QuestionItem";
// import {questionType} from "../../../../types/test-type";
// import {useEffect, useRef, useState} from "react";
//
// const a = [
//     {
//         "questionNumber": "1",
//         "question": "",
//         "id": "0.02782878511804232",
//         "answers": [
//             {
//                 "answer": "",
//                 "id": "0.4687210586784081"
//             }
//         ]
//     },
//     {
//         "question": "123123123",
//         "id": "1",
//         "answers": [
//             {
//                 "answer": "Да",
//                 "id": "0.7884361796303003"
//             },
//             {
//                 "answer": "Нет",
//                 "id": "0.2701911499901959"
//             }
//         ],
//         "questionNumber": "2"
//     },
//     {
//         "question": "123123123",
//         "id": "2",
//         "answers": [
//             {
//                 "answer": "Да",
//                 "id": "0.7884361796303003"
//             },
//             {
//                 "answer": "Нет",
//                 "id": "0.2701911499901959"
//             }
//         ],
//         "questionNumber": "3"
//     },
//     {
//         "question": "123123123",
//         "id": "3",
//         "answers": [
//             {
//                 "answer": "Да",
//                 "id": "0.7884361796303003"
//             },
//             {
//                 "answer": "Нет",
//                 "id": "0.2701911499901959"
//             }
//         ],
//         "questionNumber": "4"
//     },
//     {
//         "question": "123123123",
//         "id": "4",
//         "answers": [
//             {
//                 "answer": "Да",
//                 "id": "0.7884361796303003"
//             },
//             {
//                 "answer": "Нет",
//                 "id": "0.2701911499901959"
//             }
//         ],
//         "questionNumber": "5"
//     },
//     {
//         "question": "123123123",
//         "id": "5",
//         "answers": [
//             {
//                 "answer": "Да",
//                 "id": "0.7884361796303003"
//             },
//             {
//                 "answer": "Нет",
//                 "id": "0.2701911499901959"
//             }
//         ],
//         "questionNumber": "6"
//     },
//     {
//         "question": "123123123",
//         "id": "6",
//         "answers": [
//             {
//                 "answer": "Да",
//                 "id": "0.7884361796303003"
//             },
//             {
//                 "answer": "Нет",
//                 "id": "0.2701911499901959"
//             }
//         ],
//         "questionNumber": "7"
//     },
//     {
//         "question": "123123123",
//         "id": "7",
//         "answers": [
//             {
//                 "answer": "Да",
//                 "id": "0.7884361796303003"
//             },
//             {
//                 "answer": "Нет",
//                 "id": "0.2701911499901959"
//             }
//         ],
//         "questionNumber": "8"
//     },
//     {
//         "question": "123123123",
//         "id": "8",
//         "answers": [
//             {
//                 "answer": "Да",
//                 "id": "0.7884361796303003"
//             },
//             {
//                 "answer": "Нет",
//                 "id": "0.2701911499901959"
//             }
//         ],
//         "questionNumber": "9"
//     },
//     {
//         "question": "123123123",
//         "id": "9",
//         "answers": [
//             {
//                 "answer": "Да",
//                 "id": "0.7884361796303003"
//             },
//             {
//                 "answer": "Нет",
//                 "id": "0.2701911499901959"
//             }
//         ],
//         "questionNumber": "10"
//     },
//     {
//         "question": "123123123",
//         "id": "10",
//         "answers": [
//             {
//                 "answer": "Да",
//                 "id": "0.7884361796303003"
//             },
//             {
//                 "answer": "Нет",
//                 "id": "0.2701911499901959"
//             }
//         ],
//         "questionNumber": "11"
//     },
//     {
//         "question": "123123123",
//         "id": "11",
//         "answers": [
//             {
//                 "answer": "Да",
//                 "id": "0.7884361796303003"
//             },
//             {
//                 "answer": "Нет",
//                 "id": "0.2701911499901959"
//             }
//         ],
//         "questionNumber": "12"
//     },
//     {
//         "question": "123123123",
//         "id": "12",
//         "answers": [
//             {
//                 "answer": "Да",
//                 "id": "0.7884361796303003"
//             },
//             {
//                 "answer": "Нет",
//                 "id": "0.2701911499901959"
//             }
//         ],
//         "questionNumber": "13"
//     },
//     {
//         "question": "123123123",
//         "id": "13",
//         "answers": [
//             {
//                 "answer": "Да",
//                 "id": "0.7884361796303003"
//             },
//             {
//                 "answer": "Нет",
//                 "id": "0.2701911499901959"
//             }
//         ],
//         "questionNumber": "14"
//     },
//     {
//         "question": "123123123",
//         "id": "14",
//         "answers": [
//             {
//                 "answer": "Да",
//                 "id": "0.7884361796303003"
//             },
//             {
//                 "answer": "Нет",
//                 "id": "0.2701911499901959"
//             }
//         ],
//         "questionNumber": "15"
//     },
//     {
//         "question": "123123123",
//         "id": "15",
//         "answers": [
//             {
//                 "answer": "Да",
//                 "id": "0.7884361796303003"
//             },
//             {
//                 "answer": "Нет",
//                 "id": "0.2701911499901959"
//             }
//         ],
//         "questionNumber": "16"
//     },
//     {
//         "question": "123123123",
//         "id": "16",
//         "answers": [
//             {
//                 "answer": "Да",
//                 "id": "0.7884361796303003"
//             },
//             {
//                 "answer": "Нет",
//                 "id": "0.2701911499901959"
//             }
//         ],
//         "questionNumber": "17"
//     }
// ]
//
//
// type TestListPropsType = {
//     questions: questionType[]
// }
//
// export const TestsList = ({questions}: TestListPropsType) => {
//     const scrollWrapperRef = useRef(null);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [content, setContent] = useState(a);
//     const [loading, setLoading] = useState(false);
//
//     const loadMoreContent = () => {
//         if (loading) return;
//         setLoading(true);
//
//
//         setTimeout(() => {
//             setContent([...content, ...a]);
//             setCurrentPage(currentPage + 1);
//             setLoading(false);
//         }, 1000);
//     };
//
//     const handleScroll = () => {
//         if (scrollWrapperRef.current) {
//             const scrollWrapper = scrollWrapperRef.current;
//             const { scrollTop, clientHeight, scrollHeight } = scrollWrapper;
//             const bottomOffset = scrollHeight - (scrollTop + clientHeight);
//             if (bottomOffset < 100) {
//                 loadMoreContent();
//             }
//         }
//     };
//
//     useEffect(() => {
//         if (scrollWrapperRef.current) {
//             const scrollWrapper = scrollWrapperRef.current;
//             //@ts-ignore
//             scrollWrapper.addEventListener("scroll", handleScroll);
//             return () => {
//                 //@ts-ignore
//                 scrollWrapper.removeEventListener("scroll", handleScroll);
//             };
//         }
//     }, [content]);
//
//     return (
//         <div className={style.block}  ref={scrollWrapperRef} >
//             {content.map(item => {
//                 return <QuestionItem
//                     questionNumber={item.questionNumber}
//                     question={item.question}
//                     id={item.id}
//                     answers={item.answers}/>
//             })
//             }
//             {loading && <div>Loading...</div>}
//         </div>
//
//     )
// }
export default ''