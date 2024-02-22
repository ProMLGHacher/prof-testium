import { useState } from "react"
import { $api } from "../../shared/api/api"
import CustomInput from "../../shared/ui/CustomInput/CustomInput"
import PageTitle from "../../shared/ui/PageTitle/PageTitle"

const ChangePasswword = () => {

    const [newPass, setNewPass] = useState('')
    const [repeatNewPass, setRepeatNewPass] = useState('')

  return (
    <div>
        <PageTitle text="Сменить пароль" />
        <div style={{
                display: 'flex',
                gap: '20px',
                flexDirection: 'column'
            }}>
                <div>
                    <p style={{
                        fontSize: '16px',
                        opacity: '0.6',
                        textTransform: 'uppercase',
                        marginBottom: '6px'
                    }}>Старый пароль</p>
                    <CustomInput value={newPass} onChange={(e) => {
                        setNewPass(e)
                    }} />
                </div>
                <div>
                    <p style={{
                        fontSize: '16px',
                        opacity: '0.6',
                        textTransform: 'uppercase',
                        marginBottom: '6px'
                    }}>Новый пароль</p>
                    <CustomInput value={repeatNewPass} onChange={(e) => {
                        setRepeatNewPass(e)
                    }} />
                </div>
                <button onClick={() => {
                    if (newPass.trim().length == 0) {
                        alert('Пароль не может быть пустым')
                        return
                    }
                    if (repeatNewPass.trim().length == 0) {
                        alert('Пароль не может быть пустым')
                        return
                    }
                    $api.post('/update-password', {
                        oldPassword: newPass,
                        "password": repeatNewPass
                      })
                      .then(e => {
                        if (e.status == 200) {
                            setNewPass('')
                            setRepeatNewPass('')
                            alert('Успешно')
                        }
                      })
                      .catch(e => {
                        alert('Неверные данные')
                      })
                }} style={{
                    width: '50%'
                }} className="blue-button">Сменить пароль</button>
            </div>
    </div>
  )
}

export default ChangePasswword