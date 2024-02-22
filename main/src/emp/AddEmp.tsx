import { useNavigate, useParams } from "react-router-dom"
import PageTitle from "../shared/ui/PageTitle/PageTitle"
import CustomInput from "../shared/ui/CustomInput/CustomInput"
import { UserRole } from "../slices/authSlice"
import { useState } from "react"
import { $api } from "../shared/api/api"

const AddEmp = () => {

    const { id } = useParams()

    const [role, setRole] = useState(UserRole.Employee)

    const [fullname, setFullname] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const sub = () => {
        if (phone.trim().length == 0) {
            alert('Не все поля заполнены')
            return
        }
        if (fullname.trim().length == 0) {
            alert('Не все поля заполнены')
            return
        }
        if (password.trim().length == 0) {
            alert('Не все поля заполнены')
            return
        }
        $api.post('/signup/employe', {
            "phone": phone,
            "fullname": fullname,
            "departmentId": id,
            "password": password,
            "role": role
        })
            .then(e => {
                if (e.status == 200) {
                    alert('Успешно')
                    navigate('/main/emp')
                }
            })
    }



    return (
        <div>
            <PageTitle text="Добавление сотрудника" />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px',
            }}>
                <CustomInput placeholder="ФИО" value={fullname} onChange={(e) => {
                    setFullname(e)
                }} />
                <CustomInput placeholder="Телефон" value={phone} onChange={(e) => {
                    setPhone(e)
                }} />
                <CustomInput placeholder="Пароль" value={password} onChange={(e) => {
                    setPassword(e)
                }} />
            </div>

            <div style={{
                display: 'flex',
                gap: '20px'
            }}>
                <div style={{
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'center',
                    marginTop: '40px'
                }}>
                    <p>Cотрудник</p>
                    <input checked={UserRole.Employee === role} onClick={() => {
                        setRole(UserRole.Employee)
                    }} style={{
                        width: '20px',
                        height: '20px',
                    }} type="checkbox" />
                </div>
                <div style={{
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'center',
                    marginTop: '40px'
                }}>
                    <p>Менеджер</p>
                    <input checked={UserRole.Manager === role} onClick={() => {
                        setRole(UserRole.Manager)
                    }} style={{
                        width: '20px',
                        height: '20px',
                    }} type="checkbox" />
                </div>
            </div>
            <button onClick={sub} style={{
                width: '30%',
                marginTop: '40px'
            }} className="blue-button">Создать</button>
        </div>
    )
}

export default AddEmp