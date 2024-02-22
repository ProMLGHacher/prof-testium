import { useEffect, useState } from 'react'
import CustomInput from '../../shared/ui/CustomInput/CustomInput'
import PageTitle from '../../shared/ui/PageTitle/PageTitle'
import './Profile.css'
import { $api } from '../../shared/api/api'

type User = {
    phone: string,
    role?: "Employee" | 'HrManager' | 'Manager' | 'Admin',
    email: string,
    fullname: string,
    urlIcon: string
}

const Profile = () => {

    const [user, setUser] = useState<User>({
        email: '',
        fullname: '',
        phone: '',
        urlIcon: ''
    })

    useEffect(() => {
        $api.get<User>('/profile').then((e) => {
            setUser(e.data)
        })
    }, [])

    return (
        <div>
            <PageTitle text='Общая информация' />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
            }}>
                <div>
                    <p style={{
                        fontSize: '16px',
                        opacity: '0.6'
                    }}>ФИО</p>
                    <CustomInput value={user?.fullname} onChange={e => {
                        setUser((prev) => {
                            return { ...prev, fullname: e }
                        })
                    }} />
                </div>
                <div>
                    <p style={{
                        fontSize: '16px',
                        opacity: '0.6'
                    }}>Email</p>
                    <CustomInput value={user?.email} onChange={e => {
                        setUser((prev) => {
                            return { ...prev, email: e }
                        })
                    }} />
                </div>
                <div>
                    <p style={{
                        fontSize: '16px',
                        opacity: '0.6'
                    }}>Tелефон</p>
                    <CustomInput value={user?.phone} />
                </div>
                <div>
                    <p style={{
                        fontSize: '16px',
                        opacity: '0.6'
                    }}>Роль</p>
                    <CustomInput value={user?.role == 'Admin' ? 'Админ' : user?.role == 'Employee' ? 'Сотрудник' : user?.role == 'HrManager' ? 'HR' : 'Менеджер'} />
                </div>
            </div>
            <button style={{
                minWidth: '240px',
                marginTop: '20px'
            }} className='blue-button' onClick={() => {
                if (user.fullname.length == 0) {
                    alert('ФИО не заполнено')
                    return
                }
                $api.put('/profile', {
                    "email": user.email,
                    "fullname": user.fullname
                })
                    .then(e => {
                        if (e.status == 200) {
                            alert('Сохранено')
                        }
                    })
            }}>
                Сохранить
            </button>
        </div>
    )
}

export default Profile