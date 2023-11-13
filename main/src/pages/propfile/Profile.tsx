import { useEffect, useState } from 'react'
import CustomInput from '../../shared/ui/CustomInput/CustomInput'
import PageTitle from '../../shared/ui/PageTitle/PageTitle'
import './Profile.css'
import { $api } from '../../shared/api/api'

type User = {
    phone: string,
    role: number,
    email: string,
    fullname: string,
    urlIcon: string
}

const Profile = () => {

    const [user, setUser] = useState<User | undefined>(undefined)

    useEffect(() => {
        $api.get<User>('/profile').then((e) => {
            setUser(e.data)
        })
    }, [])

    return (
        <div>
            <PageTitle text='Общая информация' />
            <div style={{
                display: 'grid',
                gridGap: '20px',
                gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))'
            }}>
                <div>
                    <p style={{
                        fontSize: '16px',
                        opacity: '0.6'
                    }}>ФИО</p>
                    <CustomInput value={user?.fullname} />
                </div>
                <div>
                    <p style={{
                        fontSize: '16px',
                        opacity: '0.6'
                    }}>Email</p>
                    <CustomInput value={user?.email} />
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
                    <CustomInput value={user?.role} />
                </div>
            </div>
        </div>
    )
}

export default Profile