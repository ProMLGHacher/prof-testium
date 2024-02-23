import { useEffect, useState } from "react"
import { $api } from "../../shared/api/api"
import { useParams } from "react-router-dom"
import PageTitle from "../../shared/ui/PageTitle/PageTitle"
import CustomInput from "../../shared/ui/CustomInput/CustomInput"

const ChangeUser = () => {

    const { id } = useParams()

    const [user, setUser] = useState<
        {
            department?: {
                id: string,
                name: string
            }, "id": string, "phone": string, "role": string, "email": string, "fullname": string, "urlIcon": string
        }
    >(
        {
            email: '',
            fullname: '',
            id: '',
            phone: '',
            role: '',
            urlIcon: '',
            department: {
                "id": "",
                "name": ''
            }
        }
    )

    const [departments, setDepartments] = useState<{
        "id": string,
        "name": string
    }[]>([])


    useEffect(() => {
        $api.get('/departments')
            .then(e => {
                setDepartments(e.data)
                $api.get<{ "id": string, "phone": string, "role": string, "email": string, "fullname": string, "urlIcon": string }>('/profile/' + id)
                    .then(e => {
                        setUser(e.data)
                    })
            })
    }, [])

    return (
        <div>
            <div>
                <PageTitle text='Изменить данные сотрудника' />
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
                        <CustomInput value={user?.phone} onChange={e => {
                            setUser((prev) => {
                                return { ...prev, phone: e }
                            })
                        }} />
                    </div>
                    <div>
                        <p style={{
                            fontSize: '16px',
                            opacity: '0.6'
                        }}>Роль</p>
                        <p style={{
                            padding: '20px',
                            outline: 'none',
                            width: '100%',
                            boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.5)',
                            border: 'none'
                        }}>
                            {user.role == 'Admin' ? 'Админ' : user?.role == 'Employee' ? 'Сотрудник' : user?.role == 'HrManager' ? 'HR' : 'Менеджер'}
                        </p>
                    </div>
                    <div>
                        <p style={{
                            fontSize: '16px',
                            opacity: '0.6'
                        }}>Отдел</p>
                        <select style={{
                            MozAppearance: 'none',
                            WebkitAppearance: 'none',
                            padding: '20px',
                            outline: 'none',
                            width: '100%',
                            boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.5)',
                            border: 'none'
                        }} value={JSON.stringify(user.department)} onChange={(e) => {
                            setUser((prev) => {
                                return { ...prev, department: JSON.parse(e.target.value) }
                            })
                        }}>
                            {
                                departments.map(e => {
                                    return <option value={JSON.stringify(e)}>{e.name}</option>
                                })
                            }
                        </select>
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
                    $api.put('/profile/' + user.id, {
                        "employerId": user.id,
                        "email": user.email,
                        "phone": user.phone,
                        "departmentId": user.department?.id,
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
        </div>
    )
}

export default ChangeUser
