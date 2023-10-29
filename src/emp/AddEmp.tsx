import { useParams } from "react-router-dom"
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

    const sub = () => {
        $api.post('/signup/employe', {
            "phone": phone,
            "fullname": fullname,
            "departmentId": id,
            "password": password,
            "role": role
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
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '40px'
                }}>
                    <p>Cотрудник</p>
                    <input checked={UserRole.Employee === role} onClick={() => {
                        setRole(UserRole.Employee)
                    }} style={{
                        width: '40px',
                        height: '40px',
                    }} type="checkbox" />
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '40px'
                }}>
                    <p>HR</p>
                    <input checked={UserRole.HrManager === role} onClick={() => {
                        setRole(UserRole.HrManager)
                    }} style={{
                        width: '40px',
                        height: '40px',
                    }} type="checkbox" />
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '40px'
                }}>
                    <p>Менеджер</p>
                    <input checked={UserRole.Manager === role} onClick={() => {
                        setRole(UserRole.Manager)
                    }} style={{
                        width: '40px',
                        height: '40px',
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