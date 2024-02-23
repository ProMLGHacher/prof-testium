import React, { useEffect, useState } from 'react'
import PageTitle from '../shared/ui/PageTitle/PageTitle'
import { $api } from '../shared/api/api'
import { Otdel } from '../pages/rating/Rating'
import AddButton from '../shared/ui/AddButton/AddButton'
import { useAppSelector } from '../store/hooks'
import { UserRole, selectRole } from '../slices/authSlice'
import { Link } from 'react-router-dom'

const Emp = () => {

    const [otdels, setOtdels] = useState<Otdel[]>([])
    const [emp, setEmp] = useState<{
        "id": string,
        "phone": string,
        "role": number,
        "email": string,
        "fullname": string,
        "urlIcon": string
    }[]>([])
    const [selected, setSetselected] = useState(0)

    const getOtdels = async () => {
        const data = await $api.get<Otdel[]>('/departments')
        setOtdels(data.data)
    }

    const role = useAppSelector(selectRole)

    useEffect(() => {
        getOtdels()
    }, [])

    const get = async () => {
        const data = await $api.get<{
            "id": string,
            "phone": string,
            "role": number,
            "email": string,
            "fullname": string,
            "urlIcon": string
        }[]>(`/employers/${otdels[selected].id}`)
        console.log(data.data);

        setEmp(data.data)
    }

    useEffect(() => {
        if (otdels.length == 0) return
        get()
    }, [otdels, selected])


    return (
        <div>
            <PageTitle text='Сотрудники' />
            <div style={{
                display: 'flex',
                overflowX: 'scroll',
                gap: '20px',
            }}>
                {
                    otdels.map((el, index) => {
                        return <div onClick={() => {
                            setSetselected(index)
                        }} style={{
                            padding: '20px',
                            minWidth: '180px',
                            border: '1px solid #34343450',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '20px',
                            backgroundColor: index === selected ? '#193D9B' : 'transparent',
                            color: index === selected ? 'white' : 'black'
                        }}>
                            <p style={{
                                textTransform: 'uppercase'
                            }}>{el.name}</p>
                        </div>
                    })
                }
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                marginBlock: '40px'
            }}>
                {
                    emp.length == 0 && otdels[selected] && <AddButton to={'/main/emp/add/' + otdels[selected].id} >
                        <div></div>
                    </AddButton>
                }
                {
                    emp.map((el, index) => {
                        return index !== emp.length - 1 ? <Link style={{
                            textDecoration: 'none',
                            color: 'black'
                        }} to={'/main/changeUser/' + el.id}><div style={{
                            padding: '20px',
                            border: '1px solid #34343450',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                                <p>{el.fullname}</p>
                                <button onClick={() => {
                                    $api.delete('/remove-employer/' + el.id)
                                        .then(e => {
                                            get()
                                        })
                                }}>del</button>
                            </div>
                        </Link> : [UserRole.Admin, UserRole.Manager].includes(role!) ? <AddButton to={'/main/emp/add/' + otdels[selected].id}>
                            <Link style={{
                                textDecoration: 'none',
                                color: 'black'
                            }} to={'/main/changeUser/' + el.id}>
                                <div style={{
                                    padding: '20px',
                                    border: '1px solid #34343450',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <p>{el.fullname}</p>
                                    <button onClick={() => {
                                        $api.delete('/remove-employer/' + el.id)
                                            .then(e => {
                                                get()
                                            })
                                    }}>del</button>
                                </div>
                            </Link>
                        </AddButton> : <div style={{
                            padding: '20px',
                            border: '1px solid #34343450'
                        }}>
                            {el.fullname}
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Emp