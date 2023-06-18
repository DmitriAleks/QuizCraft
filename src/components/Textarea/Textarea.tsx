//@ts-ignore
import style from "../../routes/Profile/components/TestEditor/TestEditor.module.scss";


type TextareaPropsType = {
    value: string
    onChange: (v: string) => void
}

export const Textarea = (props: TextareaPropsType) => {
    const { value, onChange} = props
    return (
        <textarea className={style.textarea}
                  placeholder="Введите вопрос"
                  value={value}
                  onChange={(e) => {
                      onChange(e.currentTarget.value)
                  }}>
              </textarea>
    )
}