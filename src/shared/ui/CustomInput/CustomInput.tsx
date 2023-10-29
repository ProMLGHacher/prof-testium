import { EditTextProps } from "../EditText/EditText"

const CustomInput = (props: EditTextProps) => {
  return (
    <input style={{
      padding: '20px',
      outline: 'none',
      width: '100%',
      boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.5)',
      border: 'none'
    }} type="text" value={props.value} placeholder={props.placeholder} onChange={(e) => {
      if (props.onChange) {
        props.onChange(e.target.value)
      }
    }} />
  )
}

export default CustomInput