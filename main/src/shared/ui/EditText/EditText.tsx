import { useRef } from 'react'
import './EditText.css'

export type EditTextProps = {
    img?: string | undefined,
    value?: string | number | readonly string[] | undefined,
    onChange?: (value: string) => void | undefined,
    placeholder?: string | undefined,
    className?: string | undefined
    
}

const EditText = (props: EditTextProps) => {

    const input = useRef<HTMLInputElement | null>(null)

    return (
        <div onClick={() => {
            input.current?.focus()
        }} style={{
            gap: '18px'
        }} className={'input-wrapper ' + props.className}>
            <img className='leading' src={props.img} alt="" />
            <input style={{
                color: 'white'
            }} ref={input} className='input' value={props.value} placeholder={props.placeholder} onChange={(e) => {
                if (props.onChange) {
                    props.onChange(e.target.value)
                }
            }} type="text" />
        </div>
    )
}

export default EditText