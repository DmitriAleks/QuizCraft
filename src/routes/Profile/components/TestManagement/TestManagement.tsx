//@ts-ignore
import style from './TestManagement.module.scss';
import {TestItem} from "../TestItem/TestItem";
import {Buffer} from "buffer";
import {Button} from "../../../../components/Button/Button";


const testDataTestsList = [
    {
        id: '1',
        name: 'Тестовый пример 1'
    },
    {
        id: '2',
        name: 'Исследование A'
    },
    {
        id: '3',
        name: 'Проект X'
    },
    {
        id: '4',
        name: 'Эксперимент Бета'
    }
]


export const TestManagement = () => {

    const openModal = () => {

    }

    const testsList = testDataTestsList.map(it => {
        return <TestItem id={it.id} title={it.name} onClick={()=>{
            console.log('открыл тест')
        }}/>
    })

    return (
        <div className={style.block}>
            <h1>Ваши тесты</h1>
            <Button name='Создать тест' onClick={openModal}/>
            <div className={style.tests_list_wrapper}>
                <div className={style.tests_list}>
                    {testsList}
                </div>
            </div>
        </div>
    )
}